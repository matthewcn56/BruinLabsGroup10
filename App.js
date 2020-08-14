import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ClassInfoScreen from "./screens/ClassInfoScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import SearchScreen from "./screens/SearchScreen.js";
import ContactsScreen from "./screens/ContactsScreen.js";
import ChatsScreen from "./screens/ChatsScreen.js";
import AddContactScreen from "./screens/AddContactScreen.js";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
    };
  }

  render() {
    return <AppNavigator />;
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  HomePage: HomePage,
  ProfileScreen: ProfileScreen,
  ClassInfoScreen: ClassInfoScreen,
  EditProfileScreen: EditProfileScreen,
  SearchScreen: SearchScreen,
  ContactsScreen: ContactsScreen,
  AddContactScreen: AddContactScreen,
  ChatsScreen: ChatsScreen,
});
const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
