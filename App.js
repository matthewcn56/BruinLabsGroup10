import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { setProfile } from './FirebaseFunctions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    setProfile({
      user: {
        uid: 'hi',
        email: 'test@gmail.com',
        profilePic: 'dne',
        displayName: 'leo testing things out, don\'t worry',
      }
    });
  }

  render() {
    return <AppNavigator />;
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  HomePage: HomePage,
});
const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
