import React from "react";
import classnames from "classnames";

import styles from "./button.scss";

export const Button = ({ className, children, ...props }) => (
  <button className={classnames(styles.button, className)} {...props}>
    {children}
  </button>
);
