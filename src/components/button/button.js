import React from "react";
import classnames from "classnames";

import styles from "./button.scss";

export const Button = ({ className, children, isDisabled, ...props }) => {
  return (
    <button
      className={classnames(
        styles.button,
        { [styles.disabled]: isDisabled },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
