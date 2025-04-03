import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [infoFirstName, setInfoFirstName] = useState("");
  const [infoLastName, setInfoLastName] = useState("");

  const saveInformation = () => {
    setInfoFirstName(firstname);
    setInfoLastName(lastname);
  }

  return (
    <View style={styles.container}>
      <View style={{margin: 50}}>
        <Text style={styles.displaySaved}>Firstname: {infoFirstName}</Text>
        <Text style={styles.displaySaved}>Lastname:{infoLastName}</Text>
      </View>
      <Text>Firstname</Text>
      <TextInput style={styles.textinput} placeholder="Enter firstname here..." onChangeText={(text) => setFirstname(text)} />
      <Text>Lastname</Text>
      <TextInput style={styles.textinput} placeholder="Enter lastname here..." onChangeText={(text) => setLastname(text)} />
      <TouchableOpacity style={styles.button} onPress={() => saveInformation()}>
        <Text style={styles.buttonText}>Submit Information</Text>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#183B4E',
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  displaySaved: {
    fontSize: 30,
  }
});
