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
import { signOut } from "../FirebaseFunctions.js";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button
            title="Edit Profile Info"
            onPress={() => this.props.navigation.navigate("EditProfileScreen")}
          />
          <Image source={require("../assets/icon.png")} />
          <Text>FIRSTNAME LASTNAME</Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            BIO
          </Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            UNIVERSITY
          </Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            MAJOR
          </Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            CLASS LIST
          </Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            STATUS
          </Text>
          <Text>
            <Image source={require("../assets/icon.png")} style={styles.icon} />
            MESSSAGE THEM
          </Text>

          <Button
            title="Home Page"
            onPress={() => this.props.navigation.navigate("HomePage")}
          ></Button>
          <Button title="Sign Out" onPress={signOut}></Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
