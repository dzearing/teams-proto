import { createComponent } from "../../utilities/createComponent";
import { getStyles as styles } from "./ChatTile.styles";
import { ChatTileView as view } from "./ChatTile.view";
import { IChatTileProps, IChatTileStyles } from "./ChatTile.types";

export const ChatTile = createComponent<IChatTileProps, IChatTileStyles>({
  scope: "ChatTile",
  styles,
  view
});
