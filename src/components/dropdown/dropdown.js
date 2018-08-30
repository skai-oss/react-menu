import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./dropdown.scss";
import { Button } from "../../";
import { DOWN, RIGHT } from "./items_direction_consts";

export default class Dropdown extends Component {
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
    itemsDirection: RIGHT,
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

  open = event => {
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
        <Button
          className={classnames(
            styles.dropdown,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
          disabled={isDisabled}
          onClick={isOpened ? this.close : this.open}
        >
          {label}
        </Button>
        {isOpened && (
          <div
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
