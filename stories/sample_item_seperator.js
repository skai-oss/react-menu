import React from "react";
import style from "./story_book.scss";
import classnames from "classnames";

export const SampleItemWithSeperator = ({ children }) => {
  return (
    <div
      className={classnames(style.advanced_item, style.advanced_seperator_item)}
    >
      {children}
    </div>
  );
};
