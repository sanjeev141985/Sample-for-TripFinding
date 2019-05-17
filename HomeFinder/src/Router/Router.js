import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "../component/LoginForm";
import PreLogin from "../component/Auth/PreLogin";
import ExploreHome from "../component/Explore/ExploreHome";
import WorkInProgress from "../component/Explore/WorkInProgress";
import ExploreDetails from "../component/ExploreDetails/ExploreDetails";
import Saved from "../component/Saved/Saved";
import Trips from "../component/Trips/Trips";
import Inbox from "../component/Inbox/Inbox";
import Profile from "../component/Profile/Profile";
import TabIcon from "./TabIcon";


const RouterComponent = () => {
  return (
    // <Router
    //   navigationBarStyle={styles.navBar}
    //   titleStyle={styles.navBarTitle}
    //   barButtonTextStyle={styles.barButtonTextStyle}
    //   barButtonIconStyle={styles.barButtonIconStyle}
    // >
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="preLogin" component={PreLogin} hideNavBar />
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ height: 60 }}
          showLabel={false}
          tabBarPosition="bottom"
          initial
        >
          <Scene key="tab1" 
            title="EXPLORE" 
            icon={TabIcon} 
            iconName="magnifier"
          >
            <Scene
              key="ExploreHome"
              component={ExploreHome}
              title="Explore"
              hideNavBar
            />
            <Scene
              key="ExploreDetails"
              component={ExploreDetails}
              title="Explore"
              hideNavBar
            />
            <Scene
              key="WorkInProgress"
              component={WorkInProgress}
              title="Coming Soon"
            />
          </Scene>

          <Scene key="tab2" title="SAVED" icon={TabIcon} iconName="heart">
            <Scene key="Saved" component={Saved} title="Saved" />
            <Scene
              key="WorkInProgress"
              component={WorkInProgress}
              title="Coming Soon"
            />
          </Scene>

          <Scene key="tab3" title="TRIPS" icon={TabIcon} iconName="map">
            <Scene key="Trips" component={Trips} title="Trips" />
          </Scene>

          <Scene key="tab4" title="INBOX" icon={TabIcon} iconName="bubbles">
            <Scene key="Inbox" component={Inbox} title="Inbox" />
          </Scene>

          <Scene key="tab5" title="PROFILE" icon={TabIcon} iconName="user">
            <Scene key="Profile" component={Profile} title="Profile" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#1abc9c"
  },
  navBarTitle: {
    color: "#FFFFFF"
  },
  barButtonTextStyle: {
    color: "#FFFFFF"
  },
  barButtonIconStyle: {
    tintColor: "rgb(255,255,255)"
  }
});

export default RouterComponent;
