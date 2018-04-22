import * as React from "react";
import { IAccordionProps } from "./Accordion.types";
import { createRef } from "office-ui-fabric-react";

export interface IAccordionState {
  collapsed: boolean;
}

export class Accordion extends React.Component<
  IAccordionProps,
  IAccordionState
  > {
  private _titleElement = createRef<HTMLElement>();

  constructor(props: IAccordionProps) {
    super(props);

    this.state = {
      collapsed: !!(props.defaultCollapsed === undefined
        ? props.collapsed
        : props.defaultCollapsed)
    };
  }

  render() {
    const { className, titleAs: TitleType, titleProps, children } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={ className } onKeyDown={ this._onRootKeyDown }>
        <TitleType
          { ...titleProps }
          focusElementRef={ this._titleElement }
          collapsed={ collapsed }
          onToggleCollapse={ this._onToggleCollapse }
          onKeyDown={ this._onKeyDown }
        />
        { !collapsed && children }
      </div>
    );
  }

  _onRootKeyDown = (ev: React.KeyboardEvent<Element>) => {
    switch (ev.which) {
      case 37:
        if (
          ev.target !== this._titleElement.value &&
          this._titleElement.value
        ) {
          this._titleElement.value.focus();
          ev.preventDefault();
          ev.stopPropagation();
        }
        break;

      default:
        break;
    }
  }

  _onToggleCollapse = () => {
    this.setState(state => ({ collapsed: !state.collapsed }));
  }

  _onKeyDown = (ev: React.KeyboardEvent<Element>) => {
    const { collapsed } = this.state;

    switch (ev.which) {
      case 37: // left
        if (!collapsed) {
          this.setState({ collapsed: true });
          break;
        }
        return;

      case 39: // right
        if (collapsed) {
          this.setState({ collapsed: false });
          break;
        }
        return;

      default:
        return;
    }

    ev.preventDefault();
    ev.stopPropagation();
  }
}
