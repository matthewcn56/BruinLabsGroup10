import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import DisplayUser from "./SubComponents/DisplayUser";
import { signOut } from "../FirebaseFunctions.js";

export default class ClassInfoScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>This is the Class Info Screen</Text>
        <Image source={require("../assets/icon.png")} />
        <Text> Other People Taking This Class:</Text>
        <DisplayUser
          username="John Doe"
          handlePress={() => this.props.navigation.navigate("ProfileScreen")}
        />
        <DisplayUser
          username="Mary Jane"
          handlePress={() => this.props.navigation.navigate("ProfileScreen")}
        />
        <DisplayUser
          username="Kevin Nguyen"
          handlePress={() => this.props.navigation.navigate("ProfileScreen")}
        />

        <Button
          title="Home Page"
          onPress={() => this.props.navigation.navigate("HomePage")}
        />
      </ScrollView>
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
