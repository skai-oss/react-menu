import React, { PureComponent } from "react";
import classnames from "classnames";

import MenuContext from "./menu_context";

import styles from "./menu.scss";

export default class Menu extends PureComponent {
  onSelectElement = selectedElement =>
    this.setState({
      selectedElement
    });

  state = {
    selectedElement: undefined,
    onSelectElement: this.onSelectElement
  };

  render() {
    const { className, children } = this.props;
    return (
      <MenuContext.Provider value={this.state}>
        <div className={classnames(styles.menu, className)}>{children}</div>
      </MenuContext.Provider>
    );
  }
}
