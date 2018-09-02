import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export const MenuContext = React.createContext({});

class Menu extends PureComponent {
  state = {
    activeElement: undefined
  };

  onSelect = index => this.setState({ activeElement: index });

  render() {
    const children = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        index,
        onSelect: this.onSelect,
        activeElement: this.state.activeElement
      })
    );

    return <div className={classnames(styles.menu, className)}>{children}</div>;
  }
}

export default Menu;
