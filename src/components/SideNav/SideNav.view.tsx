import * as React from 'react';
import { IPageLayoutProps, IPageLayoutStyles } from './PageLayout.types';

import { Header, SideNav, ChatList, ChatContent } from '../index';

export const PageLayoutView = (
  props: IPageLayoutProps & {
    styles: { [key in keyof IPageLayoutStyles]: string };
  }
) => {
  const { styles } = props;

  return <div className={styles.root} />;
};
