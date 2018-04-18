import { createComponent } from '../../utilities/createComponent';
import { getStyles as styles } from './PageLayout.styles';
import { PageLayoutView as view } from './PageLayout.view';
import { IPageLayoutProps, IPageLayoutStyles } from './PageLayout.types';

export const PageLayout = createComponent<IPageLayoutProps, IPageLayoutStyles>({
  scope: 'PageLayout',
  styles,
  view
});
