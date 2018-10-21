import { createGlobalStyle } from "./styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: white;
    font-family: ${props => props.theme.text.fontFamily},
      ${props => props.theme.text.fontFallback};
  }

  html, body, #reactRoot {
    min-height: 100vh;
  }
`;