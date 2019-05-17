import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { List, ListItem } from "react-native-elements";
import _ from "lodash";
import { employeeFetch } from "../actions";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {
    console.log(JSON.stringify(this.props.fbuser))
    this.props.employeeFetch();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={item.name}
            subtitle={item.phone}
            leftAvatar={{
              source: {
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }
            }}
          />
        )}
        keyExtractor={item => item.uid}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
  const employees = _.map(state.empList, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeeFetch }
)(EmployeeList);
