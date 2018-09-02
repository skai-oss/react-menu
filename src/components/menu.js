import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export const MenuContext = React.createContext({});

class Menu extends PureComponent {
  state = {
    activeElement: undefined
  };

  setActiveElement = activeElement => this.setState({ activeElement });

  render() {
    return (
      <MenuContext.Provider
        value={{
          ...this.state,
          setActiveElement: this.setActiveElement
        }}
      >
        <div className={classnames(styles.menu, this.props.className)}>
          {this.props.children}
        </div>
      </MenuContext.Provider>
    );
  }
}

export default Menu;
