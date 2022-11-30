import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Press Start 2P', cursive;
    font-weight: 400;    
    line-height: 1.5;
    overflow: hidden;
  }
`;

export default GlobalStyle;
