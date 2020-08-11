import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { render } from "react-dom";

export default function Class(props) {
  return <Button title={props.className} />;
}
