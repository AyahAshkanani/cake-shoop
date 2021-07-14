import React from "react";

import { Text, Image } from "react-native";

//native-base
import { List } from "native-base";

const CakeItem = ({ cake }) => {
  return (
    <List.Item>
      <Image
        source={{ uri: cake.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{cake.name}</Text>
    </List.Item>
  );
};

export default CakeItem;