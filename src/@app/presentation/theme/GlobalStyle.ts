import { createGlobalStyle } from "@app/presentation/theme/styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.palette.bodyText};
    font-family: ${props => props.theme.text.fontFamily},
      ${props => props.theme.text.fontFallback};
  }

  html, body, #reactRoot {
    min-height: 100vh;
  }
`;
