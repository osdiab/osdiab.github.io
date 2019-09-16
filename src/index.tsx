import {
  getState as getLoadableState,
  loadComponents
} from "loadable-components";
import * as React from "react";
import { hydrate, render } from "react-dom";

import { App } from "@app/App";

async function startApp() {
  const rootElement = document.getElementById("reactRoot") as HTMLElement;

  const snapSaveState = () => getLoadableState();
  (window as typeof window & {
    snapSaveState: typeof snapSaveState;
  }).snapSaveState = snapSaveState;
  if (rootElement.hasChildNodes()) {
    await loadComponents();
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}

startApp();
