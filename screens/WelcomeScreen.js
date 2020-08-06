import React from "react";
import * as Google from "expo-google-app-auth";
import ApiKeys from "../constants/ApiKeys";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/icon.png")} />
        <Text>Bruin Labs Group 10</Text>
        <Text>Short Description</Text>
        <Button
          title="Log In Or Register With Google"
          onPress={this.login}
        ></Button>
      </SafeAreaView>
    );
  }

  login = async () => {
    try {
      const result = await Google.logInAsync({
        //androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: ApiKeys.authClient.iosID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        console.log("Cancelled");
      }
    } catch (e) {
      console.log("error");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
