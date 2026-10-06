import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Botao(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.aoPressionar}>
      <Text style={styles.buttonText}>{props.texto}</Text>
    </TouchableOpacity>
  );
}
