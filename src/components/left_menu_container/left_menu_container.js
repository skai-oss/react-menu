import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import WithMenuContext from "../with_menu_context";

import styles from "./left_menu_container.scss";

const LeftMenuContainer = ({ className, children }) => (
  <div className={classnames(styles.left_menu_container, className)}>
    {children}
  </div>
);

LeftMenuContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default WithMenuContext(LeftMenuContainer);
