import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import AnimatedStyles from "react-native-animated-styles";
const { width, height } = Dimensions.get('window')

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        active: !this.state.active
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <AnimatedStyles.Image
        source={require("../../images/3.jpg")}
        duration={2100}
        style={styles.image}
        animatedStyle={styles.imageActive}
        active={this.state.active}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    marginRight: 0,
    marginTop: 0
  },
  imageActive: {
    width: width + width*0.3,
    height: height + height*0.5,
    marginRight: -width*0.3/2,
    marginTop: -height*0.5/2,
  }
});

export default MyComponent;
