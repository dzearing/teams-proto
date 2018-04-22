import * as React from "react";
import { ISideNavProps, ISideNavStyles } from "./SideNav.types";

export const SideNavView = (
  props: ISideNavProps & {
    styles: { [key in keyof ISideNavStyles]: string };
  }
) => {
  const { styles } = props;

  return <div className={ styles.root } />;
};
