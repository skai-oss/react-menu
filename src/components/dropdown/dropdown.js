import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./dropdown.scss";
import { FaChevronDown } from "react-icons/fa/index";

class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    itemsClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: []
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    itemsClassName: "",
    iconClassName: PropTypes.string,
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

  render() {
    const {
      className,
      itemsClassName,
      disabledClassName,
      iconClassName,
      label,
      isDisabled,
      children
    } = this.props;

    const { isOpened } = this.state;

    return (
      <div
        className={classnames(
          styles.dropdown,
          { [disabledClassName || styles.disabled]: isDisabled },
          className
        )}
        disabled={isDisabled}
        onClick={isOpened ? this.close : this.open}
        ref={this.saveParentSize}
        onMouseLeave={this.close}
      >
        <span>{label}</span>
        <span
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            iconClassName
          )}
        >
          <FaChevronDown />
        </span>
        {isOpened && (
          <div
            className={classnames(styles.dropdown_items, itemsClassName)}
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
