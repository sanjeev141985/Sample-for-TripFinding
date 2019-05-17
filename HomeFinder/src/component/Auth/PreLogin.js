import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from 'react-native-router-flux';
import { CreateAccButton } from "../Common";
import FBLoginButton from '../Common/FBLoginButton';


class PreLogin extends Component {
  
  onCreateAccPressed() {
    console.log("Create account");
  }

  loginPressed() {
    Actions.login()
  }

  _goToURL() {
    Linking.canOpenURL("http://www.google.com").then(supported => {
      if (supported) {
        Linking.openURL("http://www.google.com");
      } else {
        console.log("Don't know how to open URI: " + "http://www.google.com");
      }
    });
  }

  render() {
    return (
      <View>
        <Button
        onPress={this.loginPressed.bind(this)}
          buttonStyle={Styles.btnLogin}
          titleStyle={Styles.btnloginText}
          title="Log-in"
          type="clear"
        />
        <Image style={Styles.logo} source={require("../../images/logo.png")} />

        <Text style={Styles.txtWelcome}>Welcome to Dwellworks.</Text>

        <FBLoginButton />

        <CreateAccButton onPress={this.onCreateAccPressed.bind(this)}>
          Create Account
        </CreateAccButton>

        <Text style={Styles.textContainer}>
          <Text style={{ color: "#2c2c2c" }}>
            By tapping Continue, Create account or More options, I agree to
            Dwellworks's{" "}
          </Text>
          <Text style={Styles.tos} onPress={this._goToURL}>
            Terms of Services
          </Text>
        </Text>
        <Text style={Styles.txtWelcome}> .</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  btnLogin: {
    marginTop: 20,
    marginRight: 20,
    justifyContent: "flex-end"
  },
  btnloginText: {
    color: "#2c2c2c",
    fontSize: 20
  },
  logo: {
    marginTop: 120,
    marginBottom: 20,
    width: 210,
    height: 29,
    alignSelf: "center"
  },

  txtWelcome: {
    //marginTop: 120,
    marginBottom: 60,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  textContainer: {
    margin: 20,
    fontSize: 20
  },
  tos: {
    color: "#2c2c2c",
    padding: 2,
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }
});

export default PreLogin;
