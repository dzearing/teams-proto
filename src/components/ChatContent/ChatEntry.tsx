import * as React from "react";
import {
  ITheme,
  IStyle,
  PersonaCoin,
  IPersonaProps,
  getFocusStyle
} from "office-ui-fabric-react";
import { createComponent } from "../../utilities/createComponent";

export interface IChatEntryProps {
  className?: string;

  personaProps: IPersonaProps;
  name: string;
  date: string;
  messages: string[];
  received?: boolean;
}

export interface IChatEntryStyles {
  root: IStyle;
  persona: IStyle;
  messagesArea: IStyle;
  messageArea: IStyle;
  headerArea: IStyle;
  name: IStyle;
  date: IStyle;
  message: IStyle;
}

export const view = (
  props: IChatEntryProps & {
    styles: { [key in keyof IChatEntryStyles]: string };
  }
): JSX.Element => {
  const { styles, personaProps, name, date, messages } = props;

  return (
    <div className={styles.root}>
      <div className={styles.persona}>
        {!!personaProps && <PersonaCoin size={2} />}
      </div>

      <div className={styles.messagesArea}>
        {messages.map((message: string, index: number) => (
          <div
            key={index}
            data-is-focusable={true}
            className={styles.messageArea}
          >
            {index === 0 && (
              <div className={styles.headerArea}>
                <div className={styles.name}>{name}</div>
                <div className={styles.date}>{date}</div>
              </div>
            )}
            <div className={styles.message} key={index}>
              {message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStyles = (
  props: IChatEntryProps & { theme: ITheme }
): IChatEntryStyles => {
  const { theme, received } = props;
  return {
    root: [
      {
        display: "flex",
        flexDirection: received ? "row" : "row-reverse"
      },
      props.className
    ],
    persona: [
      {
        display: "flex",
        justifyContent: received ? "flex-start" : "flex-end",
        paddingTop: 8,
        width: 38,
        flexShrink: 0
      }
    ],
    messagesArea: [{}],
    messageArea: [
      getFocusStyle(theme),
      {
        boxShadow: `0 0 6px 0 rgba(0,0,0,${received ? ".1" : ".2"})`,
        display: "block",
        textAlign: "left",
        border: "none",
        margin: "2px 0",
        marginLeft: received ? 0 : "10vw",
        marginRight: received ? "10vw" : 0,
        padding: "8px 16px",
        borderRadius: 4,
        backgroundColor: received
          ? theme.palette.white
          : theme.palette.themeLight
      }
    ],
    headerArea: [
      {
        display: "flex",
        marginBottom: 4
      }
    ],
    name: [
      theme.fonts.small,
      {
        color: theme.palette.neutralPrimary,
        marginRight: 12
      }
    ],
    date: [
      theme.fonts.small,
      {
        color: theme.palette.neutralSecondary
      }
    ],
    message: []
  };
};

export const ChatEntry = createComponent<IChatEntryProps, IChatEntryStyles>({
  scope: "ChatEntry",
  styles: getStyles,
  view
});
