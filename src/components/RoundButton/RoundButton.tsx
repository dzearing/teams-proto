import * as React from 'react';
import {
  ITheme,
  IStyle,
  getNativeProps,
  getFocusStyle,
  buttonProperties
} from 'office-ui-fabric-react';
import { createComponent } from '../../utilities/createComponent';

export interface IRoundButtonProps {
  as?: string;
  className?: string;

  emphasized?: boolean;
}

export interface IRoundButtonStyles {
  root: IStyle;
}

export const view = (
  props: IRoundButtonProps & {
    styles: { [key in keyof IRoundButtonStyles]: string };
  }
): JSX.Element => {
  const { as: RootTag = 'button', styles } = props;
  const nativeProps = getNativeProps(props, buttonProperties);

  return <RootTag {...nativeProps} className={styles.root} />;
};

export const styles = (
  props: IRoundButtonProps & { theme: ITheme }
): IRoundButtonStyles => {
  const { className, theme, emphasized } = props;
  const { palette } = theme;

  return {
    root: [
      getFocusStyle(theme, -4),
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        fontSize: 14,
        backgroundColor: emphasized ? palette.themePrimary : 'inherit',
        borderColor: emphasized
          ? palette.themePrimary
          : palette.neutralSecondary,
        color: emphasized ? theme.palette.white : 'inherit',
        borderRadius: '50%',
        borderWidth: 1,
        borderStyle: 'solid',
        outline: 'none',

        selectors: {
          ':hover': {
            backgroundColor: emphasized ? palette.themeDark : palette.themeLight
          },

          '&:active': {
            borderColor: palette.themeSecondary,
            backgroundColor: palette.themeSecondary,
            color: palette.neutralLight
          }
        }
      },
      className
    ]
  };
};

export const RoundButton = createComponent<
  IRoundButtonProps,
  IRoundButtonStyles
>({
  scope: 'RoundButton',
  styles,
  view
});
