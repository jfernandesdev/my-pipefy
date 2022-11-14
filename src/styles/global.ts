import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sixing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 1rem 'Roboto', sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.gray500};
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`