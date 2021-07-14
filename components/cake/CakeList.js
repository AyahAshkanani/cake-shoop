import React from "react";

//native-base
import { List } from "native-base";

//components
import CakeItem from "./CakeItem";

//styles
import { ListWrapper } from "./styles";

const CakeList = ({ cakes }) => {
  const cakeList = cakes.map((cake) => (
    <CakeItem cake={cake} key={cake.id} />
  ));
  return (
    <ListWrapper>
      <List>{cakeList}</List>
    </ListWrapper>
  );
};

export default CakeList;