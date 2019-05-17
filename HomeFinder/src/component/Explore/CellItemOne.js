import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Actions } from 'react-native-router-flux';

class CellItemOne extends Component {
  render() {
    const { index, data, onPress } = this.props;
    return (
      <View style={styles.cellStyle}>
        <TouchableOpacity onPress={() => Actions.WorkInProgress()}>
          <View style={styles.imageContainerStyle}>
            <Image
              style={{ width: 128, height: 80 }}
              source={{ uri: data.image }}
            />
          </View>
          <Text style={{ fontSize: 17, color: "#696969", margin: 5 }}>
            {data.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cellStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    shadowColor: "#DCDCDC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    width: 130,
    height: 140
  },
  imageContainerStyle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  }
});

export default CellItemOne;
