import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import classnames from "classnames";

import { DIRECTIONS } from "../../common/constants";
import DropdownTitle from "./dropdown_title/dropdown_title";
import theme from "../../resources/theme";

const DropdownWrapper = styled.div`
  position: relative;
  padding: 12px;
  cursor: pointer;
  display: flex;

  &:hover {
    background: ${theme["light-gray"]};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
  color: ${theme["element-disabled-color"]};
  cursor: default;
  `};
`;

const DropdownItemsBase = styled.div`
  position: absolute;
  border: 1px solid ${theme["light-gray"]};
  min-width: 120px;
  z-index: 1;
`;

const DropdownItemsBottom = styled(DropdownItemsBase)`
  top: 100%;
  left: 0;
`;

const DropdownItemsBottomLeft = styled(DropdownItemsBase)`
  top: 100%;
  right: 0;
`;
const DropdownItemsLeft = styled(DropdownItemsBase)`
  right: 100%;
  top: 0;
`;
const DropdownItemsRight = styled(DropdownItemsBase)`
  left: 100%;
  top: 0;
`;

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

  state = {};

  static getDerivedStateFromProps(props, state) {
    if (!props.active) {
      return { activeIndex: undefined };
    }
    return null;
  }

  getItemsWrapper = () => {
    switch (this.props.direction) {
      case DIRECTIONS.LEFT:
        return DropdownItemsLeft;
      case DIRECTIONS.BOTTOM_LEFT:
        return DropdownItemsBottomLeft;
      case DIRECTIONS.RIGHT:
        return DropdownItemsRight;
      case DIRECTIONS.BOTTOM:
      default:
        return DropdownItemsBottom;
    }
  };

  onMouseEnter = activeIndex => {
    this.props.active && this.setState({ activeIndex });
  };

  onClick = event => {
    const { setActive = () => {}, onClick = () => {} } = this.props;
    onClick();
    setActive(event);
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
      onMouseEnter,
      active,
      activeClassName
    } = this.props;

    const { activeIndex } = this.state;

    const ItemsWrapper = this.getItemsWrapper();
    return (
      <DropdownWrapper
        className={classnames(className, {
          [disabledClassName]: isDisabled,
          [activeClassName]: active && !isDisabled
        })}
        onClick={this.onClick}
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
        {active &&
          !isDisabled && (
            <ItemsWrapper className={itemsClassName}>
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                  onMouseEnter: () => this.onMouseEnter(index),
                  active: activeIndex === index
                })
              )}
            </ItemsWrapper>
          )}
      </DropdownWrapper>
    );
  }
}

export default Dropdown;
