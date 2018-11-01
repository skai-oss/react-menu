import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export default class Menu extends PureComponent {
  state = {
    active: false,
    activeIndex: undefined
  };

  componentDidMount() {
    const { activeIndex } = this.props;
    if (activeIndex) {
      window.addEventListener("click", this.toggleActive);
      this.setState({ activeIndex: activeIndex, active: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeIndex !== this.props.activeIndex) {
      window.addEventListener("click", this.toggleActive);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.activeIndex !== props.activeIndex && state.activeIndex) {
      return { activeIndex: state.activeIndex, active: true };
    } else {
      return null;
    }
  }

  onMouseEnter = (children, activeIndex) => {
    if (this.state.active && Array.isArray(children)) {
      this.setState({ activeIndex });
      this.onChange(activeIndex);
    }
  };

  toggleActive = (event, activeIndex) => {
    event.stopPropagation();
    if (this.state.active) {
      window.removeEventListener("click", this.toggleActive);
      this.setState({ active: false, activeIndex: undefined });
      this.onChange(undefined);
    } else {
      window.addEventListener("click", this.toggleActive);
      this.setState({ active: true, activeIndex });
      this.onChange(activeIndex);
    }
  };

  onChange = activeIndex => {
    this.props.onChange && this.props.onChange(activeIndex);
  };

  render() {
    const { className, children } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className={classnames(styles.menu, className)}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            onMouseEnter: () => this.onMouseEnter(child.props.children, index),
            setActive: event => this.toggleActive(event, index),
            active: activeIndex === index
          })
        )}
      </div>
    );
  }
}
