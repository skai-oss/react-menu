import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export default class Menu extends PureComponent {
  state = {
    active: false,
    activeIndex: undefined
  };

  componentDidMount() {
    if (this.props.openTab) {
      window.addEventListener("click", this.toggleActive);
      this.setState({ activeIndex: this.props.openTab, active: true });
    }
  }

  onMouseEnter = (children, activeIndex) => {
    this.state.active &&
      Array.isArray(children) &&
      this.setState({ activeIndex });
  };

  toggleActive = (event, activeIndex) => {
    event.stopPropagation();
    if (this.state.active) {
      window.removeEventListener("click", this.toggleActive);
      this.setState({ active: false, activeIndex: undefined });
    } else {
      window.addEventListener("click", this.toggleActive);
      this.setState({ active: true, activeIndex });
    }
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
