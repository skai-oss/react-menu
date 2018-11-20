import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./separator.scss";

export const Separator = ({ className }) => {
  return <div className={classnames(styles.separator, className)} />;
};

Separator.propTypes = {
  className: PropTypes.string
};

export default Separator;
