import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./styles";

import action from "../../img/action.png";
import shape from "../../img/shape.png";
import money from "../../img/money.png";

export default function Desafio({ navigation }) {
  const dados = [
    {
      id: "1",
      name: "Ações",
      sobre: "Nacionais",
      urlImg: action,
      navega: "Acoes",
    },

    {
      id: "2",
      name: "Fundos",
      sobre: "De investimento",
      urlImg: shape,
      navega: "Fundos",
    },

    {
      id: "3",
      name: "Previdência",
      sobre: "Privada",
      urlImg: money,
      navega: "Previdencia",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.navega);
            }}
            style={styles.contaiTouchableOpacityCard}
          >
            <View style={styles.circle}>
              <Image source={item.urlImg} style={styles.imgCard} />
            </View>
            <View style={styles.containerTitles}>
              <Text style={styles.h1}>{item.name}</Text>
              <Text style={styles.h2}>{item.sobre}</Text>
            </View>
            {item.name == "Fundos" ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(item.navega);
                }}
                style={styles.btnNovo}
              >
                <Text style={styles.textBtnNovo}>Novo</Text>
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
