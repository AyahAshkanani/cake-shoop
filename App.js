import React from "react";


import { NativeBaseProvider } from "native-base";

//components
import Home from "./components/Home";
import BakeryList from "./components/bakery/BakeryList";
import BakeryDetail from "./components/bakery/BakeryDetail";

//styles
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};
export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        {/* <BakeryList /> */}
        <BakeryDetail />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

