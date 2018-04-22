import * as React from "react";
import {
  PersonaCoin,
  PersonaPresence,
  PersonaSize,
  Icon
} from "office-ui-fabric-react";
import { IChatTileProps, IChatTileStyles } from "./ChatTile.types";
import { IStylesFor } from "../../utilities";

const SkypeImageUrl =
  "//upload.wikimedia.org/wikipedia/commons/c/c3/Microsoft_Skype_for_Business_logo.svg";

export const ChatTileView = (
  props: IChatTileProps & IStylesFor<IChatTileStyles>
) => {
  const { styles, personaProps } = props;

  return (
    <button className={styles.root}>
      <div className={styles.thumbArea}>
        <PersonaCoin
          {...personaProps as {}}
          size={PersonaSize.size24}
          presence={PersonaPresence.away}
        />
      </div>
      <div className={styles.textArea}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.lastMessage}>{props.lastMessage}</span>
      </div>
      <div className={styles.subTextArea}>
        <span className={styles.lastModified}>{props.lastModified}</span>
        {props.skype && <img width="12" height="16" src={SkypeImageUrl} />}
      </div>
      <div className={styles.moreIcon}>
        <Icon iconName="more" />
      </div>
    </button>
  );
};
