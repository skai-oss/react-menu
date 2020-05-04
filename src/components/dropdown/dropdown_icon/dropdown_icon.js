import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import RightIcon from "./icons/right_icon";
import LeftIcon from "./icons/left_icon";
import DownIcon from "./icons/down_icon";

import { DIRECTIONS } from "../../../common/constants";

const DropdownIcon = ({
  direction,
  disabledClassName,
  className,
  isDisabled
}) => {
  switch (direction) {
    case DIRECTIONS.LEFT:
      return (
        <LeftIcon
          isDisabled={isDisabled}
          className={classnames(className, {
            [disabledClassName]: isDisabled
          })}
        />
      );
    case DIRECTIONS.RIGHT:
      return (
        <RightIcon
          isDisabled={isDisabled}
          className={classnames(className, {
            [disabledClassName]: isDisabled
          })}
        />
      );
    case DIRECTIONS.BOTTOM:
    case DIRECTIONS.BOTTOM_LEFT:
    default:
      return (
        <DownIcon
          isDisabled={isDisabled}
          className={classnames(className, {
            [disabledClassName]: isDisabled
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
