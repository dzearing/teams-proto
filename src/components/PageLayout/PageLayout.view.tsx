import * as React from "react";
import { IPageLayoutProps, IPageLayoutStyles } from "./PageLayout.types";

import { ChatList, ChatContent } from "../index";

export const PageLayoutView = (
  props: IPageLayoutProps & {
    styles: { [key in keyof IPageLayoutStyles]: string };
  }
) => {
  const { styles } = props;

  return (
    <div className={ styles.root }>
      <div className={ styles.header } />
      <div className={ styles.content }>
        <div className={ styles.sideNav } />
        <div className={ styles.chatList }>
          <ChatList />
        </div>
        <ChatContent className={ styles.chatContent } />
      </div>
    </div>
  );
};
