import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { DIRECTIONS } from "../../common/constants";

import DropdownTitle from "./dropdown_title/dropdown_title";

import styles from "./dropdown.scss";

class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    itemsClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    direction: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    itemsClassName: "",
    iconClassName: "",
    label: "",
    isDisabled: false,
    children: []
  };

  state = {
    isOpen: false
  };

  open = e => {
    e.stopPropagation();

    if (this.props.isDisabled) {
      return;
    }

    this.setState({ isOpen: true });
  };

  close = () => this.setState({ isOpen: false });

  getDirectionClassName = () => {
    switch (this.props.direction) {
      case DIRECTIONS.LEFT:
        return styles.dropdown_items_left;
      case DIRECTIONS.BOTTOM_LEFT:
        return styles.dropdown_items_bottom_left;
      case DIRECTIONS.RIGHT:
        return styles.dropdown_items_right;
      case DIRECTIONS.BOTTOM:
      default:
        return styles.dropdown_items_bottom;
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
      children,
      direction
    } = this.props;

    const { isOpen } = this.state;

    return (
      <div
        className={classnames(className || styles.dropdown, {
          [disabledClassName || styles.disabled]: isDisabled
        })}
        onClick={isOpen ? this.close : this.open}
        onMouseLeave={this.close}
      >
        <DropdownTitle
          direction={direction}
          isDisabled={isDisabled}
          iconClassName={iconClassName}
          disabledClassName={disabledClassName}
        >
          {label}
        </DropdownTitle>
        {isOpen && (
          <div
            className={classnames(
              styles.dropdown_items,
              this.getDirectionClassName(),
              itemsClassName
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
