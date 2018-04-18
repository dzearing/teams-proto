import * as React from 'react';
import {
  ITheme,
  IStyle,
  PersonaCoin,
  Pivot,
  PivotItem,
  Icon,
  FontWeights
} from 'office-ui-fabric-react';
import { Divider, RoundButton } from '../index';
import { createComponent } from '../../utilities/createComponent';
import { SingleLineText } from '../../utilities/commonStyles';

export interface IChatContentHeaderProps {
  className?: string;
}
export interface IChatContentHeaderStyles {
  root: IStyle;
  nameArea: IStyle;
  persona: IStyle;
  name: IStyle;
  buttonArea: IStyle;
}

export const view = (
  props: IChatContentHeaderProps & {
    styles: { [key in keyof IChatContentHeaderStyles]: string };
  }
): JSX.Element => {
  const { styles } = props;

  return (
    <div className={styles.root}>
      <div className={styles.nameArea}>
        <PersonaCoin className={styles.persona} size={3} />
        <span className={styles.name}>Name of person</span>
        <div className={styles.buttonArea}>
          <RoundButton emphasized>
            <Icon iconName="video" />
          </RoundButton>
          <RoundButton emphasized>
            <Icon iconName="phone" />
          </RoundButton>
          <RoundButton>
            <Icon iconName="addfriend" />
          </RoundButton>
        </div>
      </div>
      <Pivot>
        <PivotItem linkText="Conversation" />
        <PivotItem linkText="Files" />
        <PivotItem linkText="Activity" />
      </Pivot>
      <Divider />
    </div>
  );
};

export const styles = (
  props: IChatContentHeaderProps & { theme: ITheme }
): IChatContentHeaderStyles => {
  const { theme } = props;
  return {
    root: [
      {
        marginTop: 12
      },
      props.className
    ],
    nameArea: [
      {
        display: 'flex',
        alignItems: 'center'
      }
    ],
    persona: [
      {
        margin: 10
      }
    ],
    name: [
      theme.fonts.xLarge,
      SingleLineText,
      {
        flexGrow: 1,
        fontWeight: FontWeights.bold,
        margin: 10
      }
    ],
    buttonArea: [
      {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: -4,
        selectors: {
          '& > *': {
            margin: 4
          }
        }
      }
    ]
  };
};

export const ChatContentHeader = createComponent<
  IChatContentHeaderProps,
  IChatContentHeaderStyles
>({
  scope: 'ChatContentHeader',
  styles,
  view
});
