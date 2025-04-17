import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body 
  {
    background-color: ${props => props.theme.black_950};
    font-family: "Orbitron", sans-serif;
    color: ${props => props.theme.black_50};
    cursor: url('./cursor.png')0 0, auto !important;
  }

  a, 
  input, 
  button
  {
    font-family: "Orbitron", sans-serif;
    letter-spacing: 0.03rem;
    cursor: url('./cursor.png'), auto;
    color: ${props => props.theme.black_50};
  }

  p, 
  span 
  {
    line-height: 150%;
    letter-spacing: 0.03rem;
  }
`;