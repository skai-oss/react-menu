import React from "react";
import style from "./story_book.scss";
import { Dropdown } from "../src";

export const SampleDropDown = ({ children, ...props }) => {
  return (
    <Dropdown
      className={style.advanced_dropdown}
      itemsClassName={style.advanced_dropdown_items}
      {...props}
    >
      {children}
    </Dropdown>
  );
};
