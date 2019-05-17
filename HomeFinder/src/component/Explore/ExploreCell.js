import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import dataObj from "./ExploreData.json";
import CellItemOne from "./CellItemOne";
import CellItemTwo from "./CellItemTwo";
import HomeStayRooms from "./HomeStayRooms";

class ExploreCell extends Component {
  renderItems = () => {
    switch (this.props.title) {
      case "What can we help you find": {
        return (
          <View style={styles.item}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={dataObj.dataOne}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <CellItemOne index={index} data={item} />
              )}
            />
          </View>
        );
      }
      case "Stay with a Superhost": {
        return (
          <View style={styles.item}>
            <HomeStayRooms data={dataObj.HomesAroundYou} />
          </View>
        );
      }
      case "Homes around the world": {
        return (
          <View style={styles.item}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
              data={dataObj.dataTwo}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <CellItemTwo index={index} data={item} />
              )}
            />
          </View>
        );
      }
      case "Unique homes for your next trip": {
        return (
          <View style={styles.item}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled
              data={dataObj.dataTwo}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <CellItemTwo index={index} data={item} />
              )}
            />
          </View>
        );
      }
      default: {
        return (
          <View>
            <Text>SomeTitle</Text>
          </View>
        );
      }
    }
  };

  render() {
    return <View>{this.renderItems()}</View>;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    margin: 10
  }
});

export default ExploreCell;
