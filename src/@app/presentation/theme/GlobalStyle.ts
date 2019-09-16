import { createGlobalStyle } from "@app/presentation/theme/styled-components";
import { styleReset } from "@app/presentation/theme/styleReset";

export const GlobalStyle = createGlobalStyle`
  /* reset default CSS styles */
  ${styleReset};

  * {
    /* default font everywhere */
    font-family: ${props => props.theme.text.fontFamily},
      ${props => props.theme.text.fontFallback};
  }

  html, body, #reactRoot {
    /* page always at least full height*/
    min-height: 100vh;

    /* base colors in page */
    color: ${props => props.theme.palette.bodyText};
    background: ${props => props.theme.palette.background}
  }
`;
