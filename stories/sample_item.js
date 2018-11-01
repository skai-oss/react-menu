import React from "react";
import style from "./story_book.scss";

export const SampleItem = ({ children, ...props }) => {
  return (
    <div className={style.advanced_item} {...props}>
      {children}
    </div>
  );
};
