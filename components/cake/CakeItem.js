import React from "react";

import { Text, Image } from "react-native";

//native-base
import { List, Button } from "native-base";

import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../stores/cartStore";

const CakeItem = ({ cake }) => {
  const [quantity, setQuantity]=useState(1);

  const handleAdd=()=>{
    const newItem = {cakeId: cake.cakeId, quantity }
    cartStore.addToCart(newItem);
  }
  return (
    <List.Item>
      <Image
        source={{ uri: cake.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{cake.name}</Text>
      <NumericInput rounded 
      totalWidth={80} 
      totalHeight={30} 
      initValue={quantity} 
      minValue={1} 
      onChange={setQuantity}/>

      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default CakeItem;