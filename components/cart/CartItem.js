import {List} from "native-base";
import {Text} from "react-native";
import React from 'react';

import { TotalPrice, TrashIcon } from "./styles";

const CartItem = ({item}) => {
    // console.log(item);
    // console.log(item.name);
    return (
        <List.Item>
            <Text>{item.name}  </Text>
            <Text>  {item.price} x {item.quantity}</Text>
            <TotalPrice>{+item.price * +item.quantity}</TotalPrice>
            <TrashIcon name="trash" size={24}/>
        </List.Item>
    )
}

export default CartItem;
