import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import WithMenuContext from "../with_menu_context";

import styles from "./button.scss";

const Button = ({
  className,
  disabledClassName,
  children,
  isDisabled,
  ...props
}) => {
  return (
    <button
      className={classnames(
        styles.button,
        { [disabledClassName || styles.disabled]: isDisabled },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

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

export default WithMenuContext(Button);
