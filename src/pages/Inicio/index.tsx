import React from "react";
import { Text, View } from "react-native";

import Botao from "../../components/Botao";
import { styles } from "./styles";

export default function Inicio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>Feirão do Livro</Text>
        <Text style={styles.bannerTexto}>Doe, troque e descubra livros.</Text>
      </View>

      {/*
        TODO (Aula 17 - Missão 1): os dois botões abaixo ainda não levam a lugar nenhum.
        Siga as setas do desenho da cliente (Slide 4):
        - "Ver acervo"      → tela Acervo
        - "Como participar" → tela ComoParticipar
        Use props.navigation.navigate("NomeDaTela") no aoPressionar.
      */}
      <Botao texto="Ver acervo" aoPressionar={() => {}} />
      <Botao texto="Como participar" aoPressionar={() => {}} />
    </View>
  );
}
