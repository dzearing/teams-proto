import { createComponent } from "../../utilities/createComponent";
import * as React from "react";
import {
  ITheme,
  IStyle,
  Pivot,
  PivotItem,
  FocusZone
} from "office-ui-fabric-react";
import { Accordion, AccordionTitle, ChatTile } from "../index";
import { ChatListData } from "../../testData";

export interface IChatListProps {
  className?: string;
}
export interface IChatListStyles {
  root: IStyle;
  scrollView: IStyle;
}

export const view = (
  props: IChatListProps & { styles: { [key in keyof IChatListStyles]: string } }
) => {
  const { styles } = props;
  return (
    <div className={styles.root}>
      <Pivot>
        <PivotItem linkText="Recent" />
        <PivotItem linkText="Contacts" />
      </Pivot>
      <div className={styles.scrollView}>
        <FocusZone>
          <Accordion
            titleAs={AccordionTitle}
            titleProps={{
              text: "Pinned"
            }}
          >
            {ChatListData.map(chat => <ChatTile key={chat.id} {...chat} />)}
          </Accordion>
        </FocusZone>
      </div>
    </div>
  );
};

export const getStyles = (
  props: IChatListProps & { theme: ITheme }
): IChatListStyles => ({
  root: [
    {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      overflow: "hidden"
    }
  ],
  scrollView: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "scroll"
  }
});

export const ChatList = createComponent<IChatListProps, IChatListStyles>({
  scope: "ChatList",
  styles: getStyles,
  view
});
