import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./right_menu_container.scss";

export const RightMenuContainer = ({ className, children }) => (
  <div className={classnames(styles.right_menu_container, className)}>
    {children}
  </div>
);

RightMenuContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
