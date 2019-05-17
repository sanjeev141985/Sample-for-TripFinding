import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { ScalingButton } from "../Common/ScalingButton";
import { Actions } from "react-native-router-flux";

class SavedItemBottom extends Component {
  onCalendarPressed = () => {
    setTimeout(() => {
      Actions.WorkInProgress();
    }, 300);
  };

  renderView = () => {
    switch (this.props.viewType) {
      case "initial":
        return (
          <View style={styles.intialViewContainer}>
            <ScalingButton
              onPress={this.onCalendarPressed.bind(this)}
              style={styles.intialViewOne}
            >
              <View>
                <Icon name="calendar" size={40} color="#696969" />
              </View>
            </ScalingButton>
            <View style={{ width: 1, backgroundColor: "#696969" }} />
            <ScalingButton
              onPress={this.onCalendarPressed.bind(this)}
              style={styles.intialViewTwo}
            >
              <View>
                <Icon name="dislike" size={40} color="#696969" />
              </View>
            </ScalingButton>
          </View>
        );
      default:
        return <Text>{this.props.comment}</Text>;
    }
  };

  render() {
    return (
      <View>
        {this.renderView()}
        <Text style={styles.textStyle}>{this.props.comment}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  intialViewContainer: {
    flexDirection: "row"
  },
  intialViewOne: {
    flex: 0.49,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10
  },
  intialViewTwo: {
    flex: 0.49,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    marginLeft: 1
  },
  textStyle: {
    margin: 10,
    color: "#696969",
    fontSize: 17
  }
});

export default SavedItemBottom;
