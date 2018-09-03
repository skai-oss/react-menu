import React from "react";
import style from "./story_book.scss";

export const SampleItem = ({ children }) => {
  return <div className={style.advanced_item}>{children}</div>;
};
