import React from "react";
import style from "./story_book.scss";
import { Dropdown } from "../src";
import classnames from "classnames";

export const SampleDropDown = ({ children, itemsClassName, ...props }) => {
  return (
    <Dropdown
      className={style.advanced_dropdown}
      itemsClassName={classnames(style.advanced_dropdown_items, itemsClassName)}
      {...props}
    >
      {children}
    </Dropdown>
  );
};
