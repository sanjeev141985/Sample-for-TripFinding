import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { CachedImage } from "react-native-cached-image";
import dataObj from "./ExploreData.json";

class WorkInProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceURL: null
    };
  }

  GenerateRandomNumber = max => {
    return (RandomNumber = Math.floor(Math.random() * Math.floor(max)));
  };

  componentWillMount() {
    var RandomNumber = this.GenerateRandomNumber(5);
    this.setState({
      sourceURL: dataObj.ComingSoonURLs[RandomNumber].image
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CachedImage
        style={styles.imageStyle}
          source={{
            uri: this.state.sourceURL
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageStyle: {
    resizeMode: "contain",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default WorkInProgress;
