import * as styledComponents from "styled-components";

import { ThemeInterface } from "./";

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;
export type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<
  P,
  ThemeInterface
>;

export { css, keyframes, createGlobalStyle, ThemeProvider };
export default styled;
