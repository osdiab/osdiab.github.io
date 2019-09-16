// set theme with declaration merging, as specified in styled-components docs
// https://www.styled-components.com/docs/api#create-a-declarations-file

// import original module declarations
// eslint-disable-next-line no-restricted-imports
import "styled-components";
import "styled-components/macro";

import { ThemeInterface } from "@app/presentation/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

declare module "styled-components/macro" {
  export interface DefaultTheme extends ThemeInterface {}
}
