import * as React from "react";

import { theme } from "@app/presentation/theme";
import { Router } from "@app/Router";
import { ThemeProvider } from "./presentation/theme/styled-components";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}
