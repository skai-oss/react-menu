import React from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export const Menu = ({ className, children }) => (
  <div className={classnames(styles.menu, className)}>{children}</div>
);
