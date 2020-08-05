import React from "react";
import * as firebase from "firebase";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
export default class LoadingScreen extends React.Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.props.navigation.navigate("HomePage");
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
