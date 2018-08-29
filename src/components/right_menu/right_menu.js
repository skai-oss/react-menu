import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./right_menu.scss";

export const RightMenu = ({ className, children }) => (
  <div className={classnames(styles.right_menu, className)}>{children}</div>
);

RightMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
