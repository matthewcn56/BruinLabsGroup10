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
import Class from "./SubComponents/Class.js";

export default class HomePage extends React.Component {
  navigate(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Profile Page"
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        />
        <Image source={require("../assets/icon.png")} />
        <Text>User's profile pic here (read from db tomorrow)</Text>
        <Class className="ENGCOMP3" navigate={this.navigate} />
        <Class className="COMPSCI31" navigate={this.navigate} />
        <Class className="PHYSICS1A" navigate={this.navigate} />
        <Text>Welcome, new user (Will read from db tomorrow)</Text>
        <Button title="Sign Out" onPress={signOut} />
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
