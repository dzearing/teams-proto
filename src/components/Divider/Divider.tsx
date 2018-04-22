import * as React from "react";
import { ITheme, IStyle, FontWeights } from "office-ui-fabric-react";
import { createComponent } from "../../utilities/createComponent";

export interface IDividerProps {
  className?: string;
  text?: string;
  emphasized?: boolean;
}
export interface IDividerStyles {
  root: IStyle;
  partialDivider: IStyle;
  text: IStyle;
}

export const view = (
  props: IDividerProps & {
    styles: { [key in keyof IDividerStyles]: string };
  }
): JSX.Element => {
  const { styles, text } = props;

  if (!text) {
    return <hr className={styles.root} />;
  } else {
    return (
      <div className={styles.root}>
        <hr className={styles.partialDivider} />
        <span className={styles.text}>{text}</span>
        <hr className={styles.partialDivider} />
      </div>
    );
  }
};

export const getStyles = (
  props: IDividerProps & { theme: ITheme }
): IDividerStyles => {
  const { className, theme, text, emphasized } = props;

  const ForegroundColor = emphasized
    ? theme.palette.themePrimary
    : theme.palette.neutralTertiaryAlt;

  const HorizontalDividerStyle = {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    border: "none",
    height: 1, // emphasized ? 2 : 1,
    background: ForegroundColor
  };

  return {
    root: [
      !text && HorizontalDividerStyle,

      !!text && {
        display: "flex",
        alignItems: "center",
        // justifyContent: "stretch",
        width: "100%"
      },
      className
    ],
    partialDivider: [HorizontalDividerStyle],
    text: [
      theme.fonts.small,
      {
        margin: "0 12px",
        color: ForegroundColor,
        fontWeight: emphasized ? FontWeights.bold : FontWeights.regular
      }
    ]
  };
};

export const Divider = createComponent<IDividerProps, IDividerStyles>({
  scope: "Divider",
  styles: getStyles,
  view
});
