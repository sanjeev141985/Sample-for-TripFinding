import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { CachedImage } from "react-native-cached-image";
import SavedItemBottom from "./SavedItemBottom";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const { width } = Dimensions.get("window");
const height = 300;

class SavedItem extends Component {
  showItem = rowData => {
    Alert.alert(rowData.title);
  };
  ListViewItemSeparator = () => {
    return <View style={styles.seperatorStyle} />;
  };

  render() {
    const { item, data } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Swiper
            style={{ height }}
            dot={<View style={styles.DotsStyle} />}
            activeDot={<View style={styles.activeDotsStyle} />}
            paginationStyle={styles.paginationStyle}
            showsButtons={true}
            nextButton={<Icon name="arrow-right" color="#fff" size={30} />}
            prevButton={<Icon name="arrow-left" color="#fff" size={30} />}
          >
            {data.map((item, index) => {
              return (
                <CachedImage
                  style={styles.imageStyle}
                  source={{ uri: item.image }}
                />
              );
            })}
          </Swiper>

          <Text style={styles.rowViewTitle}>{`${"\u20B9"} ${item.price}`}</Text>
          <Text style={styles.rowViewDesc}>{`${
            item.specification.bedroom
          } beds | ${item.specification.barhroom} baths | ${
            item.specification.area
          } sqft`}</Text>
          {this.ListViewItemSeparator()}
          <SavedItemBottom
            viewType="initial"
            comment="Agent Notes: Great open space and gorgeous views!"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    shadowColor: "#DCDCDC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  slide: {
    height: height,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  imageStyle: {
    height: height,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    marginBottom: 5
  },
  rowViewTitle: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    color: "#2F4F4F",
    fontWeight: "700"
  },
  rowViewDesc: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    color: "#696969"
  },
  seperatorStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    backgroundColor: "#696969"
  },
  activeDotsStyle: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  DotsStyle: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  paginationStyle: {
    bottom: 30
  }
});

export default SavedItem;
