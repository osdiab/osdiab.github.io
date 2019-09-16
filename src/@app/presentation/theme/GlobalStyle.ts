import { createGlobalStyle } from "styled-components/macro";

import { styleReset } from "@app/presentation/theme/styleReset";
import { globalTextStyles } from "@app/presentation/theme/text";

export const GlobalStyle = createGlobalStyle`
  /* reset default CSS styles */
  ${styleReset}

  * {
    /* default font everywhere */
    font-family: ${props => props.theme.text.fontFamily};
  }

  html, body, #reactRoot {
    /* page always at least full height*/
    min-height: 100vh;

    /* base colors in page */
    color: ${props => props.theme.palette.bodyText};
    background: ${props => props.theme.palette.background}
  }

  ${globalTextStyles}
`;
