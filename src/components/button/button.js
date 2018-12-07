import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./button.scss";

const Button = ({
  className,
  disabledClassName,
  children,
  isDisabled,
  onClick,
  setActive,
  active,
  ...props
}) => (
  <button
    className={classnames(styles.button, className, {
      [disabledClassName || styles.disabled]: isDisabled
    })}
    disabled={isDisabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  className: "",
  disabledClassName: "",
  isDisabled: false,
  children: []
};

export default Button;
