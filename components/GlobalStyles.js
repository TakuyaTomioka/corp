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
  h1{
    color: #333;
    font-family: 'M PLUS 1p', sans-serif;
  }
  h2{
    color: #333;
    font-family: 'M PLUS 1p', sans-serif;
  }
  h3{
    color: #333;
    font-family: 'M PLUS 1p', sans-serif;
  }
  p{
    color: #333;
    font-family: 'M PLUS 1p', sans-serif;
  }
  li{
    list-style: none;
    font-family: 'M PLUS 1p', sans-serif;
  }
  a{
    text-decoration: none;
    outline: none;
    color: black;
  }
`;

export default GlobalStyles;