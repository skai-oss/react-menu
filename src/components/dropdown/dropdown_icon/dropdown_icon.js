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
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
        />
      );
    case DIRECTIONS.BOTTOM:
      return (
        <FaChevronDown
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
        />
      );
    case DIRECTIONS.RIGHT:
      return (
        <FaChevronRight
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
        />
      );
    default:
      return (
        <FaChevronDown
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
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
