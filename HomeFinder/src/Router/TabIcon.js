import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const TabIcon = ({ focused, iconName, title }) => {
    var color = focused ? "#1abc9c" : "#7f8c8d";
  
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center"
        }}
      >
        <Icon
          name={iconName}
          color={color}
          size={24}
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf:"center"
          }}
        />
        <Text
          style={{
            color: color,
            textAlign: "center",
            fontSize: 12
          }}
        >
          {title}
        </Text>
      </View>
    );
  };

  export default TabIcon;
