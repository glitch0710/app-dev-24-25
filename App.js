import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Your input goes here"); // React Hooks [getter, setter]

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your text here..."
        onChangeText={(text) => setText(text)}
      />
      <Text style={styles.displayText}>You entered: {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EEDC",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    borderWidth: 1,
    width: 300,
    margin: 20,
    color: "blue",
    fontSize: 15,
  },
  displayText: {
    fontSize: 20
  }
});
