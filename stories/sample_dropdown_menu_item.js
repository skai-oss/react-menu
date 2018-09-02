import React, { PureComponent } from "react";
import style from "./story_book.scss";

export default class SampleDropDownMenuItem extends PureComponent {
  render() {
    return <div className={style.dropdown_item}>{this.props.children}</div>;
  }
}
