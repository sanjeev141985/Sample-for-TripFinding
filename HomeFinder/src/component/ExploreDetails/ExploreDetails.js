import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import ExploreSlider from "./ExploreSlider";
import dataObj from "../Explore/ExploreData.json";

const { width } = Dimensions.get("window");

class ExploreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          marginLeft: 10,
          height: 0.5,
          width: width - 20,
          backgroundColor: "#606070"
        }}
      />
    );
  };
  showItem = rowData => {
    Alert.alert(rowData.title);
  };
  renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <ExploreSlider />
        <LinearGradient
          style={styles.sliderPagination}
          colors={["#00000060", "#000000"]}
        >
          <View style={styles.sliderDesc}>
            <Icon
              name="location-pin"
              color="#fff"
              size={20}
              style={{ padding: 6 }}
            />
            <Text style={styles.textStyle} numberOfLines={1}>
              Santa Clara
            </Text>
          </View>

          <View style={styles.sliderDesc}>
            <Icon name="clock" color="#fff" size={20} style={{ padding: 6 }} />
            <Text style={styles.textStyle} numberOfLines={1}>
              Five hour total
            </Text>
          </View>

          <View style={styles.sliderDesc}>
            <Icon
              name="notebook"
              color="#fff"
              size={20}
              style={{ padding: 5 }}
            />
            <Text style={styles.textStyle} numberOfLines={1}>
              Food, Drinks, Equipment and Transportation
            </Text>
          </View>

          <View style={styles.sliderDesc}>
            <Icon
              name="bubbles"
              color="#fff"
              size={20}
              style={{ padding: 6 }}
            />
            <Text style={styles.textStyle} numberOfLines={1}>
              Offered in English
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  };
  renderFooter = () => {
    return (
      <View style={styles.footerStyle}>
        <Text style={styles.textStyle}> This is Footer </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={dataObj.dataTwo}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={this.showItem.bind(this, item)}>
              <View>
                <View style={styles.titleViewStyle}>
                  <Text style={styles.rowViewTitle}>{item.title}</Text>
                  {index === 0 ? (
                    <Image
                    style={styles.imageAuther}
                    source={{
                      uri:
                        "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/34849139_10204801607197644_7909394322414370816_n.jpg?_nc_cat=100&_nc_ht=scontent-sin6-2.xx&oh=57d0ae112bd73e8234edd31a6bd5128b&oe=5D5A62CC"
                    }}
                  />
                  ) : (
                    null
                  )}
                  
                </View>

                <Text style={styles.rowViewDesc}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1
  },
  rowViewTitle: {
    padding: 10,
    fontSize: 24,
    color: "#2F4F4F",
    fontWeight: "700"
  },
  rowViewDesc: {
    padding: 10,
    fontSize: 18,
    color: "#696969"
  },
  imageAuther: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 40,
    marginRight: 10,
    marginTop: 10
  },
  titleViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerStyle: {
    width: width,
    height: 560,
    backgroundColor: "#fff"
  },
  footerStyle: {
    width: width,
    height: 45,
    backgroundColor: "#6e004a"
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    padding: 5
  },
  headingView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 330,
    bottom: 150
  },
  sliderPagination: {
    width: width,
    height: 135,
    backgroundColor: "#000"
  },
  sliderDesc: {
    flexDirection: "row"
  }
});

export default ExploreDetails;
