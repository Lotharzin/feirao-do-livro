import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../pages/Inicio";

// TODO (Aula 17 - Missão 1): importe aqui as telas que você criar em src/pages:
// Acervo, DetalheLivro e ComoParticipar.

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  // id={undefined}: exigência de tipagem do React Navigation 7.
  // Não muda nada no funcionamento do app.
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="Inicio" component={Inicio} options={{ title: "Feirão do Livro" }} />

      {/*
        TODO (Aula 17 - Missão 1): registre as outras 3 telas do desenho da cliente.
        1. Um <Stack.Screen /> para cada tela: Acervo, DetalheLivro e ComoParticipar.
        2. O name precisa ser EXATAMENTE o texto que você usar no navigate (Bug A, Slide 8).
        3. Tela que existe em src/pages mas não está aqui não abre (Bug B, Slide 9).
      */}
    </Stack.Navigator>
  );
}
