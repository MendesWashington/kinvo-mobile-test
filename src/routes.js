import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaDesafio from "./pages/TelaDesafio";
import TelaAcoes from "./pages/TelaAcoes";
import TelaFundos from "./pages/TelaFundos";
import TelaPrevidencia from "./pages/TelaPrevidencias";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Desafio"
          component={TelaDesafio}
          options={{
            title: "Desafio",
            headerTintColor: "#6F4DBF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Acoes"
          component={TelaAcoes}
          options={{
            title: "Ações",
            headerTintColor: "#6F4DBF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Fundos"
          component={TelaFundos}
          options={{
            title: "Fundos",
            headerTintColor: "#6F4DBF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Previdencia"
          component={TelaPrevidencia}
          options={{
            title: "Previdência",
            headerTintColor: "#6F4DBF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
