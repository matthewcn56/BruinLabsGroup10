import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { signOut } from "../FirebaseFunctions.js";

export default class HomePage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/icon.png")} />
        <Text>User's profile pic here (read from db tomorrow)</Text>
        <Text>Welcome, new user (Will read from db tomorrow)</Text>
        <Button title="Sign Out" onPress={signOut}></Button>
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
