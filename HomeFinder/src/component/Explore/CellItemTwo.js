import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { Actions } from 'react-native-router-flux';

class CellItemTwo extends Component {
  render() {
    const { index, data } = this.props;
    return (
      <View style={{ width: Dimensions.get("window").width - 20 }}>
        <TouchableOpacity onPress={() => Actions.WorkInProgress()} activeOpacity={0.8}>
          <View style={styles.imageStyle}>
            <Image
              style={{ height: 200 }}
              source={{
                uri: data.image
              }}
            />
          </View>

          <View style={{ flex: 0.4, margin: 5 }}>
            <Text style={styles.categoryText} numberOfLines={1}>
              {data.category}
            </Text>
            <Text style={styles.titleText} numberOfLines={1}>
              {data.title}
            </Text>
            <Text style={styles.descriptonText} numberOfLines={3}>
              {data.description}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 0.6,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#DCDCDC",
    shadowColor: "#DCDCDC",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: "hidden"
  },
  categoryText: {
    fontSize: 14,
    color: "#2F4F4F"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#2C2C2C"
  },
  descriptonText: {
    fontSize: 17,
    color: "#696969",
    height: 80
  }
});

export default CellItemTwo;
