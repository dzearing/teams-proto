import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "@uifabric/icons";
import { Fabric, loadTheme } from "office-ui-fabric-react";
import { PageLayout } from "./components";
import { loadGlobalStyles } from "./utilities/loadGlobalStyles";
import { TeamsTheme } from "./utilities/TeamsTheme";

// initialize font icon.
initializeIcons(undefined, { disableWarnings: true });

// global css reset.
loadGlobalStyles();

// set theme.
loadTheme(TeamsTheme);

// Render the page.
const App = () => (
  <Fabric>
    <PageLayout />
  </Fabric>
);

render(<App />, document.getElementById("root"));
