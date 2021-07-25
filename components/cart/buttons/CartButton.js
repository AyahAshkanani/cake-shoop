
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import { observer } from "mobx-react";
import { Text } from "react-native";

//styles
import { CartButtonStyled } from "../styles";
import cartStore from "../../../stores/cartStore";
const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button>
    <CartButtonStyled name="shopping-cart" size={24} color="white" onPress={() => navigation.navigate("CartList")}/>
    <Text>{cartStore.totalQuantity}</Text>
    </Button>
      
  );
};

export default observer(CartButton);