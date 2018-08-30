import React, { PureComponent } from "react";
import classnames from "classnames";

import styles from "./menu.scss";

export class Menu extends PureComponent {
  state = {
    activeElement: undefined
  };

  onSelect = index => this.setState({ activeElement: index });

  render() {
    const children = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, { index, onSelect: this.onSelect })
    );

    return <div className={classnames(styles.menu, className)}>{children}</div>;
  }
}
