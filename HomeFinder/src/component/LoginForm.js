import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card, CardSection, Input, Button, Spinner } from "./Common/";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginRequest } from "../actions";

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onLoginBtnPressed() {
    const { email, password } = this.props;
    this.props.loginRequest({ email, password });
  }

  renderError() {
    if (this.props.errorMsg) {
      return (
        <View style={{ backgroundColor: "While" }}>
          <Text style={styles.errorTextStyle}>
            {this.props.errorMsg.message}
          </Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onLoginBtnPressed.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <Image style={styles.logo} source={require("../images/logo.png")} />
        <CardSection>
          <Input
            label="Email"
            placeholder="mail@mail.com"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderLoginButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  logo: {
    marginTop: 60,
    marginBottom: 20,
    width: 210,
    height: 29,
    alignSelf: "center"
  }
};

const mapStateToProps = ({ Auth }) => {
  const { email, password, errorMsg, loading } = Auth;
  return { email, password, errorMsg, loading };
};

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginRequest
  }
)(LoginForm);
