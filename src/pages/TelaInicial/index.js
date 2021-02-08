import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function Inicial({ navegation }) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={navegation.navigate("/")}>
          <Text>Ações</Text>
          <Text>Nacionais</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navegation.navigate("/")}>
          <Text>Fundos</Text>
          <Text>De investimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navegation.navigate("/")}>
          <Text>Previdência</Text>
          <Text>Privada</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
