import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DIRECTIONS } from "../../../common/constants";

import DropdownIcon from "../dropdown_icon/dropdown_icon";

const DropdownTitleWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: pre;
`;

const DropdownTitle = ({
  isDisabled,
  iconClassName,
  disabledClassName,
  direction,
  children
}) => (
  <DropdownTitleWrapper>
    {direction === DIRECTIONS.LEFT && (
      <DropdownIcon
        direction={direction}
        isDisabled={isDisabled}
        className={iconClassName}
        disabledClassName={disabledClassName}
      />
    )}
    {children}
    {direction !== DIRECTIONS.LEFT && (
      <DropdownIcon
        direction={direction}
        isDisabled={isDisabled}
        className={iconClassName}
        disabledClassName={disabledClassName}
      />
    )}
  </DropdownTitleWrapper>
);

DropdownTitle.defaultProps = {
  iconClassName: "",
  className: "",
  direction: DIRECTIONS.BOTTOM,
  disabledClassName: "",
  isDisabled: false,
  children: []
};

DropdownTitle.propTypes = {
  direction: PropTypes.string,
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node
};

export default DropdownTitle;
