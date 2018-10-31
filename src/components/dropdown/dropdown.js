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
    children: PropTypes.node,
    active: PropTypes.bool
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    itemsClassName: "",
    iconClassName: "",
    label: "",
    isDisabled: false,
    children: [],
    active: false
  };

  state = {
    activeIndex: undefined
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.active) {
      return { activeIndex: undefined };
    }
    return null;
  }

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

  onMouseEnter = activeIndex => {
    this.props.active && this.setState({ activeIndex });
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
      direction,
      onClick,
      onMouseEnter,
      active
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div
        className={classnames(styles.dropdown, className, {
          [disabledClassName || styles.disabled]: isDisabled
        })}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <DropdownTitle
          direction={direction}
          isDisabled={isDisabled}
          iconClassName={iconClassName}
          disabledClassName={disabledClassName}
        >
          {label}
        </DropdownTitle>
        {active && (
          <div
            className={classnames(
              styles.dropdown_items,
              this.getDirectionClassName(),
              itemsClassName
            )}
          >
            {React.Children.map(
              children,
              (child, index) =>
                child &&
                React.cloneElement(child, {
                  onMouseEnter: () => this.onMouseEnter(index),
                  active: activeIndex === index
                })
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
