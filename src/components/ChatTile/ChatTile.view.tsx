import * as React from 'react';
import {
  PersonaCoin,
  PersonaPresence,
  Icon,
  IClassNames
} from 'office-ui-fabric-react';
import { IChatTileProps, IChatTileStyles } from './ChatTile.types';

const SkypeImageUrl =
  '//upload.wikimedia.org/wikipedia/commons/c/c3/Microsoft_Skype_for_Business_logo.svg';

export const ChatTileView = (
  props: IChatTileProps & IClassNames<IChatTileStyles>
) => {
  const { styles, personaProps } = props;

  return (
    <button className={styles.root}>
      <div className={styles.thumbArea}>
        <PersonaCoin
          {...personaProps}
          size={2}
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
