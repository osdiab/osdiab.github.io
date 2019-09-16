import * as React from "react";
import { ThemeProvider } from "styled-components/macro";

import { theme } from "@app/presentation/theme";
import { Router } from "@app/Router";

export class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    );
  }
}
