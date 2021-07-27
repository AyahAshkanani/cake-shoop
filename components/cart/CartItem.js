import {List} from "native-base";
import {Text} from "react-native";
import React from 'react';

//stores
import cartStore from "../../stores/cartStore";

//styles
import { TotalPrice, TrashIcon } from "./styles"

const CartItem = ({item}) => {
    // console.log(item);
    // console.log(item.name);
    return (
        <List.Item>
            <Text>{item.name}  </Text>
            <Text>{item.price} KD x {item.quantity}</Text>
      <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
            <TrashIcon name="trash" size={24} onPress={() => cartStore.deleteFromCart(item.id)}/>
        </List.Item>
    )
}

export default CartItem;
