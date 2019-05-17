import React, { Component } from "react";
import { StyleSheet, View, SectionList, Text, Alert } from "react-native";
import ExploreCell from "./ExploreCell";
import { Header } from "../Common";
import { Actions } from "react-native-router-flux";
import dataObj from "./ExploreData.json";

class ExploreHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  GetSectionListItem = item => {
    Alert.alert(item);
  };

  updateSearch = search => {
    this.setState({ search });
  };

  searchSubmit = () => {
    console.log(this.state.search);
    Actions.WorkInProgress()
  };

  render() {
    var C = [
      "Apricot",
      "Blackberry",
      "Blueberry",
      "Basket",
      "Cherry",
      "chipmunk"
    ];

    const overrideRenderItem = ({
      item,
      index,
      section: { title, key, data }
    }) => {
      return (
        <ExploreCell
          item={item}
          index={index}
          title={title}
          data={data}
          key={key}
        />
      );
    };

    return (
      <View style={styles.ContainerStyle}>
        <Header
          updateSearch={this.updateSearch.bind(this)}
          search={this.state.search}
          searchSubmit={this.searchSubmit.bind(this)}
        />
        <SectionList
          sections={[
            {
              title: "What can we help you find",
              data: ["item1"],
              renderItem: overrideRenderItem,
              key: "s1"
            },
            {
              title: "Stay with a Superhost",
              data: ["item1"],
              renderItem: overrideRenderItem
            },
            {
              title: "Homes around the world",
              data: ["item1"],
              renderItem: overrideRenderItem,
              key: "s2"
            },
            { title: "Top-rated experiences", data: C },
            {
              title: "Stay with a Superhost",
              data: ["item1"],
              renderItem: overrideRenderItem
            },
            {
              title: "Unique homes for your next trip",
              data: ["item1"],
              renderItem: overrideRenderItem
            }
          ]}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.SectionListItemStyle}
              onPress={this.GetSectionListItem.bind(this, item)}
            >
              {" "}
              {item}{" "}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ContainerStyle: {
    flex: 1,
    backgroundColor: "#fff"
  },
  SectionHeaderStyle: {
    backgroundColor: "#fff",
    fontSize: 28,
    margin: 10,
    color: "#2C2C2C",
    fontWeight: "700"
  },

  SectionListItemStyle: {
    fontSize: 15,
    padding: 5,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});

export default ExploreHome;
