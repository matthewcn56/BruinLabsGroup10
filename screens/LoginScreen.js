import React from "react";
import * as Google from "expo-google-app-auth";
import ApiKeys from "../constants/ApiKeys";
import * as firebase from "firebase";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

export default class LoginScreen extends React.Component {
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
        this.onSignIn(result);
        return result.accessToken;
      } else {
        console.log("Cancelled");
      }
    } catch (e) {
      console.log("error");
    }
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.

          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken, //Changed from original, check 3:00 of tutorial
            googleUser.accessToken
          );

          // Sign in with credential from the Google user.
          console.log(credential);
          firebase //This function is not working RN!
            .auth()
            .signInWithCredential(credential);
          /* .catch(function (error) {
              // Handle Errors here.
              console.log("error signing in");
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            }) */
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
