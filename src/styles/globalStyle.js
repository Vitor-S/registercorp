import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;

    a{
        text-decoration: none;
        color: #fff;
    }
  }
`;

export default GlobalStyle;