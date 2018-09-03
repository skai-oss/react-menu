import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { DOWN, RIGHT } from "./items_direction_consts";
import WithMenuContext from "../with_menu_context";

import styles from "./dropdown.scss";

class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    itemsClassName: PropTypes.string,
    itemsDirection: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: []
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    itemsClassName: "",
    itemsDirection: DOWN,
    label: "",
    isDisabled: false,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  state = {
    isOpened: false
  };

  open = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.setState({ isOpened: true });
  };

  close = event => {
    this.setState({ isOpened: false });
  };

  onClick = event => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(event);
    }
  };

  saveParentSize = element => {
    if (element) {
      this.parentWidth =
        element.getBoundingClientRect().width +
        element.getBoundingClientRect().left;
      this.parentHeight = element.getBoundingClientRect().top;
    }
  };

  render() {
    const {
      className,
      itemsClassName,
      itemsDirection,
      disabledClassName,
      label,
      isDisabled,
      children
    } = this.props;

    const { isOpened } = this.state;

    return (
      <div>
        <div
          className={classnames(
            styles.dropdown,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
          disabled={isDisabled}
          onClick={isOpened ? this.close : this.open}
          ref={this.saveParentSize}
        >
          {label}
        </div>
        {isOpened && (
          <div
            style={{
              top: itemsDirection === RIGHT ? this.parentHeight : "inherit",
              left: itemsDirection === RIGHT ? this.parentWidth : "inherit"
            }}
            className={classnames(
              { [styles.dropdown_items_down]: itemsDirection === DOWN },
              { [styles.dropdown_items_right]: itemsDirection === RIGHT },
              itemsClassName
            )}
            onClick={this.onClick}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
