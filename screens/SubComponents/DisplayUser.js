import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

export default function DisplayUser(props) {
  return (
    <View>
      <Image source={require("../../assets/icon.png")} style={styles.icon} />
      <Button title={props.username} onPress={props.handlePress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
