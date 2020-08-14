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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { setProfile } from "../FirebaseFunctions.js";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/ClassmateConnect.jpeg")}
          style={styles.logo}
        />
        <Text style={styles.bodyText}>
          A way to connect with our classmates amidst the COVID-19 pandemic
        </Text>
        <TouchableOpacity style={styles.loginButton} onPress={this.login}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  login = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ApiKeys.authClient.androidID,
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
            .signInWithCredential(credential)
            .then(function (result) {
              console.log("Signed in!");

              if (result.additionalUserInfo.isNewUser) {
                setProfile(result);
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              console.log("error signing in");
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
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
    marginRight: 50,
    marginLeft: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: { fontSize: 40, textAlign: "center" },
  bodyText: { fontSize: 20, textAlign: "center", color: "gray" },
  logo: {
    width: 350,
    height: 350,
  },
  loginButton: {
    margin: 200,
    marginBottom: 10,
    width: 150,
    height: 50,
    backgroundColor: "dodgerblue",
  },
  loginText: {
    fontSize: 30,
    textAlign: "center",
    color: "#DCDCDC",
    marginTop: 5,
  },
});
