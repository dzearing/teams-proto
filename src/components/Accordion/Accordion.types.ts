import * as React from 'react';
import { RefObject } from 'office-ui-fabric-react';

export interface IAccordionTitleProps {
  focusElementRef?: RefObject<HTMLElement>;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onKeyDown?: (ev: React.KeyboardEvent<Element>) => void;
}

export interface IAccordionProps {
  className?: string;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  titleAs: React.ReactType<IAccordionTitleProps>;
  titleProps?: any;
}
