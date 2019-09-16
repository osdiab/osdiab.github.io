import { createGlobalStyle } from "styled-components/macro";

import { styleReset } from "@app/presentation/theme/styleReset";
import { TextStyle } from "@app/presentation/utility/mixins/text/TextStyle";
import { TextBlockStyle } from "@app/presentation/utility/mixins/text/TextBlockStyle";

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

  p {
    ${TextStyle};
    ${TextBlockStyle};
  }
`;
