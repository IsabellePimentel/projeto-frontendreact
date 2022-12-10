import React from "react";
import {createGlobalStyle} from "styled-components"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
  
}
li{
  list-style: none;
}
body{
  background-image: url("https://images.unsplash.com/photo-1421930535025-d2af27c14065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"); 
color: bisque;
}
.shadow {
  box-shadow: 0 2px 10px 0 white;
}
button {
  border-radius: 5px;
  height: 3vh;
  width: 10vw;
  margin: 1vh; 
}

input, select {
  border-radius: 5px;
}

.container {
  padding: 0vw 3vw 1vw 3vw;
}
`

function App() {
  return (
  <div>
    <GlobalStyled/>
    <Header/>
    <Main />
    <Footer/>
    </div>
  );
}

export default App;
