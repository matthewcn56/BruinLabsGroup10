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
        <Text>This is the Profile info page</Text>
        <Button
          title="Home Page"
          onPress={() => this.props.navigation.navigate("HomePage")}
        ></Button>
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
