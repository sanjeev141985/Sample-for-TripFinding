import React, { Component } from "react";
import { View, Text, Animated } from "react-native";

export default class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 100 }} onPress={this.spring.bind(this)}>
          Spring
        </Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }]
          }}
          source={{
            uri:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
          }}
        />
      </View>
    );
  }
}

const styles = {
  bar: {
    height: 15,
    borderWidth: 1,
    borderColor: "#c72f06",
    backgroundColor: "#e75832"
  }
};

// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Easing,
//   Animated,
//   TouchableHighlight,
//   ScrollView
// } from "react-native";

// class EasingAnimations extends Component {
//   constructor() {
//     super();
//     this.animatedValue = new Animated.Value(0);
//   }

//   animate(easing) {
//     this.animatedValue.setValue(0);
//     Animated.timing(this.animatedValue, {
//       toValue: 1,
//       duration: 1000,
//       easing
//     }).start();
//   }

//   render() {
//     const marginLeft = this.animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 260]
//     });

//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.block, { marginLeft }]} />
//         <ScrollView>
//           <Text style={{ textAlign: "center" }}>
//             Scroll up for more animations
//           </Text>
//           <Button
//             easing="Bounce"
//             onPress={this.animate.bind(this, Easing.bounce)}
//           />
//           <Button
//             easing="Cubic"
//             onPress={this.animate.bind(this, Easing.cubic)}
//           />
//           <Button
//             easing="Back"
//             onPress={this.animate.bind(this, Easing.back(2))}
//           />
//           <Button
//             easing="Elastic"
//             onPress={this.animate.bind(this, Easing.elastic(2))}
//           />
//           <Button
//             easing="Ease"
//             onPress={this.animate.bind(this, Easing.ease)}
//           />
//           <Button
//             easing="InOut"
//             onPress={this.animate.bind(this, Easing.inOut(Easing.quad))}
//           />
//           <Button
//             easing="In"
//             onPress={this.animate.bind(this, Easing.in(Easing.quad))}
//           />
//           <Button
//             easing="Out"
//             onPress={this.animate.bind(this, Easing.out(Easing.quad))}
//           />
//           <Button easing="Sin" onPress={this.animate.bind(this, Easing.sin)} />
//           <Button
//             easing="Linear"
//             onPress={this.animate.bind(this, Easing.linear)}
//           />
//           <Button
//             easing="Quad"
//             onPress={this.animate.bind(this, Easing.quad)}
//           />
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const Button = ({ onPress, easing }) => (
//   <TouchableHighlight style={styles.button} onPress={onPress}>
//     <Text>{easing}</Text>
//   </TouchableHighlight>
// );

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60
//   },
//   button: {
//     height: 60,
//     marginLeft: 10,
//     marginRight: 10,
//     backgroundColor: "#ededed",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10
//   },
//   block: {
//     width: 50,
//     height: 50,
//     backgroundColor: "red"
//   }
// });

// export default EasingAnimations;
