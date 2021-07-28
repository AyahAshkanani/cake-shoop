
import React from "react";

//react-native
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

//native-base
import { Button } from "native-base";

//observer
import { observer } from "mobx-react";

//stores
import cartStore from "../../../stores/cartStore";
import authStore from "../../../stores/authStore";

//styles
import { CartButtonStyled, CartTextStyled } from "../styles";


const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "Please Sign in before checkout",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button onPress={handlePress}>
    <CartButtonStyled name="shopping-cart" size={24} color="white" onPress={ () => navigation.navigate("CartList")}/>
    <CartTextStyled color="white">{cartStore.totalQuantity}</CartTextStyled>
    </Button>
      
  );
};

export default observer(CartButton);