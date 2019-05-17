import React from "react";
import { Text, View, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";

//Create a Component
const Header = ({ updateSearch, search, searchSubmit }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.viewStyle}>
        <SearchBar
          containerStyle={styles.searchbarStyle}
          inputContainerStyle={{ backgroundColor: "white" }}
          placeholder="Try San Diago"
          onChangeText={updateSearch}
          lightTheme
          value={search}
          returnKeyType="search"
          //autoFocus={true}
          selectionColor={"orange"}
          onSubmitEditing={searchSubmit}
          clearButtonMode="while-editing"
        />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    paddingTop: 25,
    paddingBottom: 10
  },
  viewStyle: {
    backgroundColor: "8f8f8",
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: "#DCDCDC",
    shadowColor: "#DCDCDC",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  },
  searchbarStyle: {
    width: Dimensions.get("window").width - 20,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DCDCDC",
    shadowColor: "#A9A9A9",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5
  }
};

// Make the component available to the other part of the application.
export { Header };
