import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ApiKeys from "./constants/ApiKeys.js";
import * as firebase from "firebase";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { initializeFirebase } from "./FirebaseFunctions.js";
initializeFirebase();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    var db = firebase.firestore();

    //Initializing Firebase
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
