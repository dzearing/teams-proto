import * as React from 'react';
import { ITheme, IStyle, TextField } from 'office-ui-fabric-react';
import { createComponent } from '../../utilities/createComponent';
import { ChatContentHeader } from './ChatContentHeader';
import { ChatContentList } from './ChatContentList';

export interface IChatContentProps {
  className?: string;
}
export interface IChatContentStyles {
  root: IStyle;
  header: IStyle;
  list: IStyle;
  textField: IStyle;
}

export const view = (
  props: IChatContentProps & {
    styles: { [key in keyof IChatContentStyles]: string };
  }
): JSX.Element => {
  const { styles } = props;

  return (
    <div className={styles.root}>
      <ChatContentHeader className={styles.header} />
      <ChatContentList className={styles.list} />
      <div className={styles.textField}>
        <TextField placeholder="Type a new message" underlined />
      </div>
    </div>
  );
};

export const styles = (
  props: IChatContentProps & { theme: ITheme }
): IChatContentStyles => {
  return {
    root: [
      {
        background: props.theme.palette.neutralLighter,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      },
      props.className
    ],
    header: [
      {
        flexShrink: 0,
        padding: '0 20px'
      }
    ],
    list: [
      {
        flexGrow: 1,
        overflow: 'hidden'
      }
    ],
    textField: [
      {
        flexShrink: 0,
        padding: '0 20px',
        margin: '20px 0'
      }
    ]
  };
};

export const ChatContent = createComponent<
  IChatContentProps,
  IChatContentStyles
>({
  scope: 'ChatContent',
  styles,
  view
});
