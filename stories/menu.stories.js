import React from "react";
import { storiesOf } from "@storybook/react";

import { Menu } from "../src";
import style from "./story_book.scss";

storiesOf("Menu", module).add("Default view", () => (
  <Menu className={style.menu} />
));
