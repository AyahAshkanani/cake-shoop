import React from "react";

// Styling
// import { ImageBackground } from "react-native";
import { HomeBackground, Title ,TopStyling, OverLayContainer,BottomStyling, ButtonStyled } from "../styles";

// import { View, Text } from "react-native";


const Home = () => {
  return <HomeBackground style={{ flex: 1, width: "100%", height: "20%" }}
  source={{
    uri:
      "https://www.animatedimages.org/data/media/1439/animated-baking-image-0124.jpg",
  }}>
  <OverLayContainer>
    <TopStyling
    style={{ height: "40%", alignItems: "center", justifyContent: "center" }}
  > 
  <Title style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
      Sinful
    </Title></TopStyling>
    <BottomStyling>
   <ButtonStyled onPress={() => alert("I want sweets")}>Click here to skip</ButtonStyled>
 </BottomStyling> 
    </OverLayContainer> 
  </HomeBackground>
};

export default Home;