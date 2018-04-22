import * as React from "react";
import {
  ITheme,
  IStyle,
  PersonaCoin,
  Pivot,
  PivotItem,
  Icon,
  FontWeights
} from "office-ui-fabric-react";
import { Divider, RoundButton } from "../index";
import { createComponent, SingleLineText } from "../../utilities";
import {} from "../../utilities";

export interface IChatContentHeaderProps {
  className?: string;
}
export interface IChatContentHeaderStyles {
  root: IStyle;
  nameArea: IStyle;
  persona: IStyle;
  name: IStyle;
  buttonArea: IStyle;
}

export const view = (
  props: IChatContentHeaderProps & {
    styles: { [key in keyof IChatContentHeaderStyles]: string };
  }
): JSX.Element => {
  const { styles } = props;

  return (
    <div className={styles.root}>
      <div className={styles.nameArea}>
        <PersonaCoin className={styles.persona} size={3} />
        <span className={styles.name}>Name of person</span>
        <div className={styles.buttonArea}>
          <RoundButton primary>
            <Icon iconName="video" />
          </RoundButton>
          <RoundButton primary>
            <Icon iconName="phone" />
          </RoundButton>
          <RoundButton>
            <Icon iconName="addfriend" />
          </RoundButton>
        </div>
      </div>
      <Pivot>
        <PivotItem linkText="Conversation" />
        <PivotItem linkText="Files" />
        <PivotItem linkText="Activity" />
      </Pivot>
      <Divider />
    </div>
  );
};

export const getStyles = (
  props: IChatContentHeaderProps & { theme: ITheme }
): IChatContentHeaderStyles => {
  const { theme, className } = props;
  const { fonts } = theme;
  return {
    root: [
      {
        marginTop: 12
      },
      className
    ],
    nameArea: [
      {
        display: "flex",
        alignItems: "center"
      }
    ],
    persona: [
      {
        margin: 10
      }
    ],
    name: [
      fonts.xLarge,
      SingleLineText,
      {
        flexGrow: 1,
        fontWeight: FontWeights.bold,
        margin: 10
      }
    ],
    buttonArea: [
      {
        display: "flex",
        flexWrap: "nowrap",
        margin: -4,
        selectors: {
          "& > *": {
            margin: 4
          }
        }
      }
    ]
  };
};

export const ChatContentHeader = createComponent<
  IChatContentHeaderProps,
  IChatContentHeaderStyles
>({
  scope: "ChatContentHeader",
  view,
  styles: getStyles
});
