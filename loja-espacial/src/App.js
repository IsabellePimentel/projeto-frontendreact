import React from "react";
import {createGlobalStyle} from "styled-components"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}
li{
  list-style: none;
}`

function App() {
  return (
  <div>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
