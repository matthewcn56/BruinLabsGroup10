import React from "react";
import * as firebase from "firebase";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

export default class HomePage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/icon.png")} />
        <Text>Bruin Labs Group 10</Text>
        <Text>This is our HomePage</Text>
        <Button
          title="Sign Out"
          onPress={() => firebase.auth().signOut()}
        ></Button>
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
