import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./left_menu.scss";

export const LeftMenu = ({ className, children }) => (
  <div className={classnames(styles.left_menu, className)}>{children}</div>
);

LeftMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
