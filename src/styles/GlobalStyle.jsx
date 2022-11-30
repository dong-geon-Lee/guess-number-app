import { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "500px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-x:hidden;
  }

  body {
    font-family: 'Press Start 2P', cursive;
    font-weight: 400;    
    line-height: 1.5;
    overflow: hidden;
  }
`;

export default GlobalStyle;

// Mobile: 360 x 640.
// Mobile: 375 x 667.
// Mobile: 360 x 720.
// iPhone X: 375 x 812.
// Pixel 2: 411 x 731.
// Tablet: 768 x 1024.
// Laptop: 1366 x 768.
// High-res laptop or desktop: 1920 x 1080.
