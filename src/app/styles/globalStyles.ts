"use client";

import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#794CC3",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#3F3C4399",
    grayDark: "#9191A2",
  },
};

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, p {
    margin: 0px;
  }

  body {
    display: flex;
    flex-direction: column;
    background-color: #F5F5F9;
    width: 100vw;
    height: 100vh;
    margin: 0px;
  }
`;

export default GlobalStyle;
