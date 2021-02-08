import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import CardAction from "../../componetes/CardAction/CardAction";
import api from "../../services/api";

import styles from "./styles";

export default function Acoes() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    api.get("stocks").then((response) => {
      const data = response.data.data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setActivities(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={activities}
        keyExtractor={(activity) => activity.id}
        renderItem={({ item }) => (
          <CardAction
            title={item.name}
            subtitle={item.ticker}
            valor={item.minimumValue}
            profitability={item.profitability}
          />
        )}
      />
    </View>
  );
}
