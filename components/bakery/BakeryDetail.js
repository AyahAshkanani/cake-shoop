import React from "react";

//stores
import bakeryStore from "../../stores/bakeryStore";
import cakeStore from "../../stores/cakeStore";

//observer
import { observer } from "mobx-react";
import CakeList from "../cake/CakeList";

//styles
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "./styles";

//native-base
import { Spinner } from "native-base";

const BakeryDetail = ({ navigation, route }) => {
  const { bakery } = route.params;
  if (bakeryStore.loading) return <Spinner />;
  
  const cakes = bakery.cakes.map((cake) =>
    cakeStore.getCakeById(cake.id)
  );
  return (
    <>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CakeList cakes={cakes} />
    </>
  );
};

export default observer(BakeryDetail);