import { IStyle, IPersonaProps } from "office-ui-fabric-react";

export interface IChatTileStyles {
  root: IStyle;
  thumbArea: IStyle;
  textArea: IStyle;
  name: IStyle;
  lastMessage: IStyle;
  lastModified: IStyle;
  subTextArea: IStyle;
  moreIcon: IStyle;
}

export interface IChatTileProps {
  personaProps?: IPersonaProps;
  name?: string;
  lastMessage?: string;
  lastModified?: string;
  selected?: boolean;
  unread?: boolean;
  skype?: boolean;
}
