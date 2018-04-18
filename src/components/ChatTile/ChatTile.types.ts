import { IStyles, IPersonaProps } from "office-ui-fabric-react";

export interface IChatTileStyles {
  root: IStyles;
  thumbArea: IStyles;
  textArea: IStyles;
  name: IStyles;
  lastMessage: IStyles;
  lastModified: IStyles;
  subTextArea: IStyles;
  moreIcon: IStyles;
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
