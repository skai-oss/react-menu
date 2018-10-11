import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { DIRECTIONS } from "../../../common/constants";
import styles from "./dropdown_icon.scss";

const DropdownIcon = ({
  direction,
  disabledClassName,
  className,
  isDisabled
}) => {
  switch (direction) {
    case DIRECTIONS.LEFT:
      return (
        <FaChevronLeft
          className={classnames(className || styles.icon, {
            [disabledClassName || styles.disabled]: isDisabled
          })}
        />
      );
    case DIRECTIONS.RIGHT:
      return (
        <FaChevronRight
          className={classnames(className || styles.icon, {
            [disabledClassName || styles.disabled]: isDisabled
          })}
        />
      );
    case DIRECTIONS.BOTTOM:
    case DIRECTIONS.BOTTOM_LEFT:
    default:
      return (
        <FaChevronDown
          className={classnames(className || styles.icon, {
            [disabledClassName || styles.disabled]: isDisabled
          })}
        />
      );
  }
};

DropdownIcon.defaultProps = {
  direction: DIRECTIONS.BOTTOM,
  className: "",
  disabledClassName: "",
  isDisabled: false
};

DropdownIcon.propTypes = {
  direction: PropTypes.string,
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default DropdownIcon;
