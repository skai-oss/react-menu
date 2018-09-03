import React from "react";
import style from "./story_book.scss";
import { Button } from "../src";

export const SampleButton = ({ children, ...props }) => {
  return (
    <Button className={style.advanced_button} {...props}>
      {children}
    </Button>
  );
};
