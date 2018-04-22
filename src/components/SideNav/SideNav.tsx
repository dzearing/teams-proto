import { createComponent } from "../../utilities/createComponent";
import { getStyles as styles } from "./SideNav.styles";
import { SideNavView as view } from "./SideNav.view";
import { ISideNavProps, ISideNavStyles } from "./SideNav.types";

export const SideNav = createComponent<ISideNavProps, ISideNavStyles>({
  scope: "SideNav",
  styles,
  view
});
