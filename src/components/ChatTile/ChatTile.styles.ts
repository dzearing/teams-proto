import { getFocusStyle, ITheme, FontWeights } from "office-ui-fabric-react";
import { IChatTileProps, IChatTileStyles } from "./ChatTile.types";
import { IRawStyleBase } from "@uifabric/merge-styles/lib/IRawStyleBase";

const SingleLineText: IRawStyleBase = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "inline-block",
  maxWidth: "100%"
};

export const getStyles = (
  props: IChatTileProps & { theme: ITheme }
): IChatTileStyles => {
  const { theme } = props;

  const FocusHoverTileStyle = {
    color: theme.palette.white,
    background: theme.palette.themePrimary,
    selectors: {
      $moreIcon: {
        display: "block"
      },
      $subTextArea: {
        visibility: "hidden"
      }
    }
  };

  return {
    root: [
      getFocusStyle(theme),
      {
        display: "flex",
        border: 0,
        backgroundColor: "inherit",
        userSelect: "none",
        position: "relative",
        padding: "0 20px",
        width: "100%",
        height: 50,
        alignItems: "center",
        background: props.selected ? theme.palette.themeLighter : undefined,
        selectors: {
          ":hover": FocusHoverTileStyle,
          ":focus": FocusHoverTileStyle
        }
      }
    ],
    thumbArea: {
      flexShrink: 0,
      width: 34
    },
    textArea: [
      {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-start",
        textAlign: "left",
        justifyContent: "space-evenly",
        height: "100%",
        minWidth: 0
      }
    ],
    subTextArea: {
      display: "flex",
      flexShrink: 0,
      flexDirection: "column",
      alignItems: "flex-end",
      textAlign: "right",
      justifyContent: "space-evenly",
      height: "100%"
    },
    name: [
      theme.fonts.medium,
      SingleLineText,
      props.unread && {
        fontWeight: FontWeights.bold
      }
    ],
    lastMessage: [
      theme.fonts.small,
      SingleLineText,
      {
        whiteSpace: "nowrap",
        color: theme.palette.neutralTertiary,

        selectors: {
          "$root:focus &, $root:hover &": {
            color: theme.palette.white
          }
        }
      },
      props.unread && {
        color: theme.palette.neutralPrimary,
        fontWeight: FontWeights.bold
      }
    ],
    lastModified: [theme.fonts.small, SingleLineText],
    moreIcon: {
      display: "none",
      position: "absolute",
      right: 20,
      top: 0,
      height: 50,
      lineHeight: 50,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      fontWeight: FontWeights.bold
    }
  };
};
