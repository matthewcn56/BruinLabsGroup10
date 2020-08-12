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
import Class from "./SubComponents/Class.js";

export default class HomePage extends React.Component {
  navigate(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Button
            title="Profile Page"
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          />
          <Image source={require("../assets/icon.png")} />
          <Text>User's profile pic here </Text>
          <Text>Welcome, USERNAME {/*INSERT NAVBAR UNDERSCROLLVIEW */}</Text>
          <Class
            className="COMPSCI31"
            handlePress={() =>
              this.props.navigation.navigate("ClassInfoScreen")
            }
          />
          <Class
            className="ENGCOMP3"
            handlePress={() =>
              this.props.navigation.navigate("ClassInfoScreen")
            }
          />

          <Class
            className="PHYSICS1A"
            handlePress={() =>
              this.props.navigation.navigate("ClassInfoScreen")
            }
          />

          <Button title="Sign Out" onPress={signOut} />
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
  },
});
