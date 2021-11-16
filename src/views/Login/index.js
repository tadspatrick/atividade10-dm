import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Login() {
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  function navegar() {
    navigation.navigate("Drawers", { user: username });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Área Restrita</Text>
      <TextInput
        style={styles.input}
        placeholder="login"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput style={styles.input} placeholder="senha" />
      <View style={styles.button}>
        <Button title="Autenticar" onPress={() => navegar()} color="#6E5494" />
      </View>
    </View>
  );
}

export default Login;
