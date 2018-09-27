import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./dropdown_icon.scss";

const DropdownIcon = ({
  direction,
  disabledClassName,
  className,
  isDisabled
}) => {
  switch (direction) {
    case "left":
      return (
        <FaChevronLeft
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
        />
      );
    case "bottom":
      return (
        <FaChevronDown
          className={classnames(
            styles.icon,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
        />
      );
    case "right":
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
  direction: "bottom",
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
