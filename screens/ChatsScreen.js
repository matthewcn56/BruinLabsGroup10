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
  TouchableOpacity,
  FlatList,
} from "react-native";
import { signOut } from "../FirebaseFunctions.js";
import { SearchBar, Header, ListItem } from "react-native-elements";
export default class ChatsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      bottomDivider
      chevron
    />
  );
  render() {
    const { search } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={<Text style={styles.topText}>Chat</Text>}
          centerComponent={
            <SearchBar
              containerStyle={styles.searchBar}
              inputStyle={styles.innerSearchBar}
              placeholder="Search Chats..."
              onChangeText={this.updateSearch}
              value={search}
            />
          }
          rightComponent={
            <TouchableOpacity>
              <Text style={styles.topText}>+</Text>
            </TouchableOpacity>
          }
        />
        <FlatList
          contentContainerStyle={styles.chatDisplay}
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
        <Button
          title="Home Page"
          onPress={() => this.props.navigation.navigate("HomePage")}
        />
      </SafeAreaView>
    );
  }
}
const list = [
  {
    name: "Joanna Montano",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "ENGCOMP 3",
  },
  {
    name: "Kyle Jackson, Marg...",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "COMPSCI 31 ",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    justifyContent: "center",
    height: 48,
    width: 220,
  },
  chatDisplay: {
    flex: 1,
    justifyContent: "center",
    height: 60,
    width: 300,
  },
  innerSearchBar: {
    flex: 1,
    justifyContent: "center",
    height: 48,
    width: 200,
  },
  topText: {
    color: "#DCDCDC",
    fontSize: 30,
  },
});
