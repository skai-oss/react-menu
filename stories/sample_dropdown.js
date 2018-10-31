import React from "react";
import style from "./story_book.scss";
import { Dropdown } from "../src";
import classnames from "classnames";

export const SampleDropDown = ({ children, itemsClassName, ...props }) => {
  return (
    <Dropdown
      className={classnames(style.advanced_dropdown, props.openTabClassName)}
      itemsClassName={classnames(style.advanced_dropdown_items, itemsClassName)}
      {...props}
    >
      {children}
    </Dropdown>
  );
};
