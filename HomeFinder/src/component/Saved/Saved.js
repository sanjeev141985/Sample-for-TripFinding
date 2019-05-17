import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import dataObj from "../Explore/ExploreData.json";
import SavedItem from "./SavedItem";

class Saved extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataObj.HomesAroundYou}
          renderItem={({ item, index }) => <SavedItem item={item} data={dataObj.HomesAroundYou} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Saved;
