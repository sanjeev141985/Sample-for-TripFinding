import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { Actions } from "react-native-router-flux";
import { CachedImage } from "react-native-cached-image";
import { Button } from "../Common/";

class HomeStayRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: null
    }
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn(index) {
    this.setState({
      activeView: index
    }, ()=>{
      Animated.spring(this.animatedValue, {
        toValue: 0.9
      }).start();
    })
  
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      //friction: 3,
      //tension: 40
    }).start(() => {
      this.setState({
        activeView: null
      })
      Actions.ExploreDetails();
    });
  }

  render() {
    const { data } = this.props;
    const animatedStyle = {
      transform: [{ scale:  this.animatedValue }]
    };
    var viewRef;
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn.bind(this, 1)}
            onPressOut={this.handlePressOut.bind(this)}
          >
            <Animated.View 
            style={[styles.subContainer,  (this.state.activeView === 1 ? animatedStyle  : {})  ]}
            ref={(ref) => viewRef = ref}
            >
              <CachedImage
                style={styles.imageStyle}
                source={{
                  uri: data[0].image
                }}
              />

              <Text style={styles.categoryText} numberOfLines={1}>
                {data[0].category}
              </Text>
              <Text style={styles.titleText} numberOfLines={2}>
                {data[0].title}
              </Text>
              <Text style={styles.priceText}>{`${"\u20B9"} ${
                data[0].price
              } per night`}</Text>
              <Text style={styles.ratingsText}>{data[0].ratings}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn.bind(this, 2)}
            onPressOut={this.handlePressOut.bind(this)}
          >
            <Animated.View 
            style={[styles.subContainer, (this.state.activeView === 2 ? animatedStyle  : {})]}
            ref={(ref) => viewRef = ref}
            >
              <CachedImage
                style={styles.imageStyle}
                source={{
                  uri: data[1].image
                }}
              />
              <Text style={styles.categoryText} numberOfLines={1}>
                {data[1].category}
              </Text>
              <Text style={styles.titleText} numberOfLines={2}>
                {data[1].title}
              </Text>
              <Text style={styles.priceText}>{`${"\u20B9"} ${
                data[1].price
              } per night`}</Text>
              <Text style={styles.ratingsText}>{data[1].ratings}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <CachedImage
              style={styles.imageStyle}
              source={{
                uri: data[2].image
              }}
            />
            <Text style={styles.categoryText} numberOfLines={1}>
              {data[2].category}
            </Text>
            <Text style={styles.titleText} numberOfLines={2}>
              {data[2].title}
            </Text>
            <Text style={styles.priceText}>{`${"\u20B9"} ${
              data[2].price
            } per night`}</Text>
            <Text style={styles.ratingsText}>{data[2].ratings}</Text>
          </View>
          <View style={styles.subContainer}>
            <CachedImage
              style={styles.imageStyle}
              source={{
                uri: data[3].image
              }}
            />
            <Text style={styles.categoryText} numberOfLines={1}>
              {data[3].category}
            </Text>
            <Text style={styles.titleText} numberOfLines={2}>
              {data[3].title}
            </Text>
            <Text style={styles.priceText}>{`${"\u20B9"} ${
              data[3].price
            } per night`}</Text>
            <Text style={styles.ratingsText}>{data[3].ratings}</Text>
          </View>
        </View>
        <Button onPress={() => Actions.WorkInProgress()}>Show All (667)</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    //backgroundColor: "#7AC36A"
  },
  container: {
    flex: 0.5,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    //backgroundColor: "#696969"
  },
  subContainer: {
    flex: 0.5,
    margin: 7
  },
  imageStyle: {
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#DCDCDC",
    marginBottom: 5
  },
  categoryText: {
    fontSize: 15,
    color: "#2F4F4F"
  },
  titleText: {
    fontSize: 17,
    color: "#2C2C2C"
  },
  priceText: {
    fontSize: 13,
    color: "#808080"
  },
  ratingsText: {
    fontSize: 13,
    color: "#808080"
  }
});

export default HomeStayRooms;
