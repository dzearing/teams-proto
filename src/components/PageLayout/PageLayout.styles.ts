import { IPageLayoutStyles } from "./PageLayout.types";
import { ITheme } from "office-ui-fabric-react";

export const getStyles = (props: { theme: ITheme }): IPageLayoutStyles => {
  const { palette } = props.theme;

  return {
    root: [
      {
        display: "flex",
        flexDirection: "column",
        // jusifyContent: "stretch",
        alignItems: "stretch",
        width: "100vw",
        height: "100vh"
      }
    ],

    header: [
      {
        background: palette.themeDark,
        height: 50,
        flexShrink: 0
      }
    ],

    content: [
      {
        display: "flex",
        // justifyContent: "stretch",
        alignItems: "stretch",
        flexGrow: 1,
        minHeight: "55px",
        width: "100%"
      }
    ],

    sideNav: [
      {
        background: palette.themeDarker,
        width: 60,
        flexShrink: 0
      }
    ],

    chatList: [
      {
        width: 300,
        flexShrink: 0,
        position: "relative"
      }
    ],

    chatContent: [
      {
        flexGrow: 1
      }
    ]
  };
};
