import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3 {
    line-height: 1;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
