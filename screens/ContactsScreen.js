import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  SectionList,
} from "react-native";
import { signOut } from "../FirebaseFunctions.js";
import { SearchBar } from "react-native-elements";
export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      search: "",
    };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          title="+"
          onPress={() => this.props.navigation.navigate("AddContactScreen")}
        />
        <Text>Contacts</Text>
        <SearchBar
          placeholder="Search Contacts..."
          onChangeText={this.updateSearch}
          value={search}
        />

        <ScrollView>
          <SectionList></SectionList>
        </ScrollView>
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
