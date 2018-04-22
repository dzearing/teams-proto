import { mergeStyles } from "office-ui-fabric-react";

export const loadGlobalStyles = () => {
  // global css reset to remove body padding and disable
  // body scrolling.
  mergeStyles({
    selectors: {
      ":global(body)": {
        padding: 0,
        margin: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden"
      }
    }
  });
};
