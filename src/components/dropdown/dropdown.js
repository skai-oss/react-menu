import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

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

  openDropdown = e => {
    e.stopPropagation();
    !this.props.isDisabled && this.setState({ isOpen: true });
  };

  closeDropdown = () => this.setState({ isOpen: false });

  getDirectionClassName = () => {
    switch (this.props.direction) {
      case "left":
        return styles.dropdown_items_left;
      case "bottom":
        return styles.dropdown_items_bottom;
      case "right":
        return styles.dropdown_items_right;
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
        className={classnames(
          styles.dropdown,
          { [disabledClassName || styles.disabled]: isDisabled },
          className
        )}
        onClick={isOpen ? this.closeDropdown : this.openDropdown}
        onMouseLeave={this.closeDropdown}
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
