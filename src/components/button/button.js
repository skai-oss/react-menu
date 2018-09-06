import React, { PureComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import WithMenuContext from "../with_menu_context";

import styles from "./button.scss";

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    isDisabled: false,
    children: []
  };

  onClick = () => {
    this.props.onSelectElement(this.props.children);
    this.props.onClick();
  };

  render() {
    const { className, disabledClassName, children, isDisabled } = this.props;

    return (
      <button
        className={classnames(
          styles.button,
          { [disabledClassName || styles.disabled]: isDisabled },
          className
        )}
        disabled={isDisabled}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}

export default WithMenuContext(Button);
