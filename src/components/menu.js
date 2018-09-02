import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export const MenuContext = React.createContext({});

export default class Menu extends PureComponent {
  render() {
    const { className, children } = this.props;
    return <div className={classnames(styles.menu, className)}>{children}</div>;
  }
}
