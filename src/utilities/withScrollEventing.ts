import * as React from 'react';
import { RefObject } from 'office-ui-fabric-react';

export interface IWithScrollEventingOptions<TProps> {
  scrollRef: RefObject<HTMLElement>;
  component: React.ReactType<TProps>;
}
export const withScrollEventing = <TProps>({
  scrollRef,
  component
}: IWithScrollEventingOptions<TProps>) => {
  class WithScrollEventing extends React.Component {
    public static displayName = component.displayName;

    public render() {
      return this.props.children;
    }
  }
  return WithScrollEventing;
};

class StateComponent {
  public setState(state): void {}
}

class ScrollState extends StateComponent {

  public getState() {
    return {      
      onScroll: this._onScroll
    };
  }

  private _onScroll = (ev: React.MouseEvent<Element>) => {
    const {
      scrollTop,
      scrollHeight,
      scrollLeft,
      scrollWidth,
      clientWidth,
      clientHeight
    } = ev.target as Element;

    this.setState({
      scrollLeft,
      scrollTop,
      scrollWidth,
      scrollHeight,
      clientWidth,
      clientHeight
    });
  };
}

class TimerState extends StateComponent {
  private _intervalId: number;

  public componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({
        date: new Date().toDateString()
      });
    }, 1000);
  }
}