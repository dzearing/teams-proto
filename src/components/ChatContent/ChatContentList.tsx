import * as React from "react";
import { ITheme, IStyle, FocusZone } from "office-ui-fabric-react";
import { createComponent } from "../../utilities/createComponent";
import { ChatEntry } from "./ChatEntry";
import { getRandomText } from "../../testData";
import { IStylesFor } from "../../utilities";
import { Divider } from "../index";

export interface IChatContentListProps {
  className?: string;
}
export interface IChatContentListStyles {
  root: IStyle;
  container: IStyle;
}

export const view = (
  props: IChatContentListProps & IStylesFor<IChatContentListStyles>
): JSX.Element => {
  const { styles } = props;

  return (
    <div className={ styles.root }>
      <FocusZone className={ styles.container }>
        <ChatEntry
          personaProps={ {} }
          received
          name="Person"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(100), getRandomText(10)] }
        />
        <ChatEntry
          personaProps={ {} }
          name="David"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(33)] }
        />
        <ChatEntry
          personaProps={ {} }
          received
          name="Person"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(100), getRandomText(10)] }
        />
        <ChatEntry
          personaProps={ {} }
          name="David"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(33)] }
        />
        <Divider text="Today" />
        <Divider text="Last read" emphasized />
        <ChatEntry
          personaProps={ {} }
          received
          name="Person"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(100), getRandomText(10)] }
        />
        <ChatEntry
          personaProps={ {} }
          name="David"
          date="12/12/12 1:22 PM"
          messages={ [getRandomText(33)] }
        />
      </FocusZone>
    </div>
  );
};

export const getStyles = (
  props: IChatContentListProps & { theme: ITheme }
): IChatContentListStyles => {
  return {
    root: [
      props.className
    ],
    container: [
      {
        padding: 20,
        selectors: {
          "& > * ": {
            margin: "12px 0"
          }
        }
      }
    ]
  };
};

export const ChatContentList = createComponent<
  IChatContentListProps,
  IChatContentListStyles
  >({
    scope: "ChatContentList",
    styles: getStyles,
    view
  });
