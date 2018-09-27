import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./dropdown_item.scss";

const DropdownItem = ({ className, children, ...props }) => {
  return (
    <div className={classnames(styles.dropdown_item, className)} {...props}>
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node
};

export default DropdownItem;
