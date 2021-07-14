import React from "react";
//react-native
import { Image } from "react-native";
//native-base
import { List } from "native-base";

//styles
import { BakeryItemStyled } from "./styles";
const BakeryItem = ({ bakery }) => {
  return (
    <List.Item>
      <Image
        source={{ uri: bakery.image }}
        style={{ width: 100, height: 100 }}
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </List.Item>
  );
};

export default BakeryItem;