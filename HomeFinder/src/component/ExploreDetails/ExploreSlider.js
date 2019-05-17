import React, { Component } from "react";
import { Text, View, Dimensions, TouchableWithoutFeedback } from "react-native";
import Swiper from "react-native-swiper";
import AnimatedStyles from "react-native-animated-styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import dataObj from "../Explore/ExploreData.json";
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get("window");
const height = 420;

const renderPagination = (index, total, context) => {
  return (
    <LinearGradient
      colors={["#00000000", "#000000"]}
      style={styles.paginationStyle}
    >
      <Text style={{ color: "#98FB98", fontSize: 20 }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </LinearGradient>
  );
};

// const swiperIndexChanged = (index) => {
//   debugger;
//   alert(index);
// };

class ExploreSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }

  _renderHeader = () => {
    return (
      <LinearGradient
        style={styles.sliderPaginationHeader}
        colors={["#00000090", "#000000"]}
      >
        <View>
          <TouchableWithoutFeedback
            onPress={() => Actions.pop()}
          >
            <Icon
              name="arrow-left"
              color="#fff"
              size={28}
              style={{ margin: 6 }}
            />
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    );
  };

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.setState({
  //       active: !this.state.active
  //     });
  //   }, 5000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {

    const swiperIndexChanged = (index) => {
      this.setState({
        active: !this.state.active
      });
    };

    return (
      <View style={styles.container}>
      <LinearGradient
        style={styles.sliderPaginationHeader}
        colors={["#000000", "#00000010"]}
      >
      <View style={{marginTop: 20}}>
      <TouchableWithoutFeedback
            onPress={() => Actions.pop()}
          >
            <Icon
              name="arrow-left"
              color="#fff"
              size={28}
              style={{ margin: 6 }}
            />
          </TouchableWithoutFeedback>
      </View>
      

      </LinearGradient>
        
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop
          autoplay
          autoplayTimeout={5}
          onIndexChanged={swiperIndexChanged}
        >
          {dataObj.HomesAroundYou.map((item, index) => {
            return (
              <View style={styles.slide}>
                <AnimatedStyles.Image
                  source={{ uri: item.image }}
                  duration={9000}
                  style={styles.image}
                  animatedStyle={styles.imageActive}
                  active={this.state.active}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  wrapper: {},
  slide: {
    width: width,
    height: height,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  paginationStyle: {
    position: "absolute",
    width,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    top: 365
  },
  paginationText: {
    color: "orange",
    fontSize: 28
  },
  image: {
    width: width,
    height: height,
    marginRight: 0,
    marginTop: 0
  },
  imageActive: {
    width: width + width * 0.3,
    height: height + height * 0.5,
    marginRight: (-width * 0.3) / 2,
    marginTop: (-height * 0.5) / 2
  },
  sliderPaginationHeader: {
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    top: 0,
    width: width,
    height: 60,
    backgroundColor: "#00000030"
  }
};

export default ExploreSlider;
