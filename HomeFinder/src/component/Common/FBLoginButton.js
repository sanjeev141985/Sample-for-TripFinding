import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from 'react-native-router-flux';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

class FBLoginButton extends Component {

  // componentDidMount() {
  //   LoginManager.logOut();
  // }

  async facebookLogin() {
    let result;
    try {
      this.setState({ showLoadingModal: true });
      LoginManager.setLoginBehavior("native");
      result = await LoginManager.logInWithReadPermissions([
        "public_profile",
        "email"
      ]);
    } catch (nativeError) {
      try {
        LoginManager.setLoginBehavior("web");
        result = await LoginManager.logInWithReadPermissions([
          "public_profile",
          "email"
        ]);
      } catch (webError) {
        /**
         * TODO: show error message to the user if none of the FB screens did not open
         */
      }
    }
    // handle the case that users clicks cancel button in Login view
    if (result.isCancelled) {
      /**
       * TODO: show error message to the user that user has pressed cancel button
       */
    } else {
      /**
       * * Create a graph request asking for user information
       */
      this.FBGraphRequest(
        "id, email, picture.type(large)",
        this.FBLoginCallback
      );
    }
  }

  async FBGraphRequest(fields, callback) {
    const accessData = await AccessToken.getCurrentAccessToken();
    /**
     * * Create a graph request asking for user information
     */
    const infoRequest = new GraphRequest(
      "/me",
      {
        accessToken: accessData.accessToken,
        parameters: {
          fields: {
            string: fields
          }
        }
      },
      callback.bind(this)
    );
    // Execute the graph request created above
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  async FBLoginCallback(error, result) {
    if (error) {
      console.log(`FacebookGraphRequestError: ${JSON.stringify(error)}`);
      /**
       * TODO: show error message to the user.
       */
    } else {
      console.log(`FacebookUserInformation: ${JSON.stringify(result)}`);
      Actions.tabbar({fbuser:result})
      // Retrieve and save user details in state. In our case with
      // Redux and custom action saveUser
      // this.props.saveUser({
      //   id: result.id,
      //   email: result.email,
      //   image: result.picture.data.url
      // });
    }
  }

  render() {
    const { buttonStyle, textStyle, iconStyle } = styles;
    return (
      <View>
        <TouchableOpacity
          onPress={this.facebookLogin.bind(this)}
          style={buttonStyle}
        >
          <Icon
          style={{ paddingTop:7, paddingRight:7 }}
          color="#3B5998" name="facebook" size={30} />
          <Text style={textStyle}>Sign In With Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#3B5998",
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    //paddingLeft: 8,
  width: 330,
  //flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
    //margin: 20,
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3B5998"
  }
};

export default FBLoginButton;
