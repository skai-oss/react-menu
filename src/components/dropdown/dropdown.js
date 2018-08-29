import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./dropdown.scss";

class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabledClassName: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: ""
  };

  static defaultProps = {
    className: "",
    disabledClassName: "",
    label: "",
    isDisabled: false,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  open(event) {
    if (this.props.isDisabled) {
      return;
    }
    this.setState({ isOpened: true });
  }

  close(event) {
    this.setState({ isOpened: false });
  }

  onClick(event) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const {
      className,
      disabledClassName,
      label,
      isDisabled,
      children
    } = this.props;

    const { isOpened } = this.state;

    return (
      <div>
        <div
          className={classnames(
            styles.dropdown,
            { [disabledClassName || styles.disabled]: isDisabled },
            className
          )}
          disabled={isDisabled}
          onClick={isOpened ? this.close : this.open}
        >
          {label}
        </div>
        {isOpened && (
          <div
            id="items"
            onClick={this.onClick}
            className={styles.dropdown_items}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
