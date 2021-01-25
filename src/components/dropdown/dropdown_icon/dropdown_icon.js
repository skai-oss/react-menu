import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import RightIcon from "./icons/right_icon";
import LeftIcon from "./icons/left_icon";
import DownIcon from "./icons/down_icon";

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
    case DIRECTIONS.LEFT_TO_TOP:
      return (
        <LeftIcon
          className={classnames(styles.icon, className, {
            [disabledClassName || styles.disabled]: isDisabled
          })}
        />
      );
    case DIRECTIONS.RIGHT:
    case DIRECTIONS.RIGHT_TO_TOP:
      return (
        <RightIcon
          className={classnames(styles.icon, className, {
            [disabledClassName || styles.disabled]: isDisabled
          })}
        />
      );
    case DIRECTIONS.BOTTOM:
    case DIRECTIONS.BOTTOM_LEFT:
    default:
      return (
        <DownIcon
          className={classnames(styles.icon, className, {
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
