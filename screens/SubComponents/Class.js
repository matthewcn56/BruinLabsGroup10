import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";

export default function Class(props) {
  return <Button title={props.className} onPress={props.handlePress} />;
}
