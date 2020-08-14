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

export default class AddContactScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>This is the AddContactScreen</Text>
          <Button
            title="Home Page"
            onPress={() => this.props.navigation.navigate("HomePage")}
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
