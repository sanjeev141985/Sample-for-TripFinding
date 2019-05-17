import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import firebase from "firebase";
import SplashScreen from 'react-native-splash-screen';
import reducers from "./reducers";
import Router from './Router/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDOPhSSgLfcMcs2IKF85gQdUSRrxq8zeCo',
      authDomain: 'manager-2cbc2.firebaseapp.com',
      databaseURL: 'https://manager-2cbc2.firebaseio.com',
      projectId: 'manager-2cbc2',
      storageBucket: 'manager-2cbc2.appspot.com',
      messagingSenderId: '593907630040'
    };
    firebase.initializeApp(config);

    SplashScreen.hide();
    
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
  }
}


export default App;
