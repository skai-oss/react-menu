import React from "react";
import PropTypes from "prop-types";

import { DIRECTIONS } from "../../../common/constants";

import DropdownIcon from "../dropdown_icon/dropdown_icon";

import styles from "./dropdown_title.scss";

const DropdownTitle = ({
  isDisabled,
  iconClassName,
  disabledClassName,
  direction,
  withIcon,
  children
}) => (
  <span className={styles.dropdown_title}>
    {withIcon &&
      direction === DIRECTIONS.LEFT && (
        <DropdownIcon
          direction={direction}
          isDisabled={isDisabled}
          className={iconClassName}
          disabledClassName={disabledClassName}
        />
      )}
    {children}
    {withIcon &&
      direction !== DIRECTIONS.LEFT && (
        <DropdownIcon
          direction={direction}
          isDisabled={isDisabled}
          className={iconClassName}
          disabledClassName={disabledClassName}
        />
      )}
  </span>
);

DropdownTitle.defaultProps = {
  iconClassName: "",
  className: "",
  direction: DIRECTIONS.BOTTOM,
  disabledClassName: "",
  isDisabled: false,
  withIcon: true,
  children: []
};

DropdownTitle.propTypes = {
  direction: PropTypes.string,
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  withIcon: PropTypes.bool,
  children: PropTypes.node
};

export default DropdownTitle;
