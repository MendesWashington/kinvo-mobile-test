import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export default function CardAction(props) {
  const [btnLike, setStatusLike] = useState(false);
  const [iconLike, setIconLike] = useState("hearto");

  const [btnArrow, setStatusArrow] = useState(false);
  const [iconArrow, setIconArrow] = useState("arrowdown");

  function handleLike() {
    if (btnLike) {
      setStatusLike(false);
      setIconLike("hearto");
    } else {
      setStatusLike(true);
      setIconLike("heart");
    }
  }

  function handleArrow() {
    if (btnArrow) {
      setStatusArrow(false);
      setIconArrow("arrowdown");
    } else {
      setStatusArrow(true);
      setIconArrow("arrowup");
    }
  }

  function handleCorPercent(percent) {
    if (percent === 0) return "#627179";
    if (percent > 0) return "#AED335";
    return "#E85D1F";
  }
  function handleArrowPercent(percent) {
    if (percent === 0) return "";
    if (percent > 0) return "arrowup";
    return "arrowdown";
  }

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.contaiTouchableOpacityCard}
    >
      <View style={styles.containerLineOne}>
        <Text style={styles.LineOneh1}>{props.title}</Text>
        <TouchableOpacity onPress={handleLike}>
          <AntDesign name={iconLike} size={24} color="#6F4DBF" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerLineTow}>
        <Text style={styles.LineTwoh1}>{props.subtitle}</Text>
      </View>
      <View style={styles.Line}></View>

      <View style={styles.containerbody}>
        <Text style={styles.textBody}>Valor Mínimo:</Text>
        <Text style={styles.textBody}>R$ {props.valor}</Text>
      </View>

      <View style={styles.containerbody}>
        <Text style={styles.textBody}> Rentabilidade:</Text>
        <View style={styles.containerRenta}>
          <AntDesign
            name={handleArrowPercent(props.profitability)}
            size={12}
            color={handleCorPercent(props.profitability)}
          />
          <Text
            style={{
              fontSize: 12,
              color: handleCorPercent(props.profitability),
            }}
          >
            {props.profitability}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
