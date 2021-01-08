import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    max-width: 1440px;
    margin: 0 auto;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    outline: none;
    color: black;
  }
`;

export default GlobalStyles;