import React from "react";
import { storiesOf } from "@storybook/react";

import { Menu } from "../src";
import style from "./story_book.scss";

storiesOf("Menu", module).add("Default view", () => (
  <Menu className={style.menu} />

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Menu, Button } from "../src/";

storiesOf("Menu", module).add("with button", () => (
  <Menu>
    <Button onClick={action("Button clicked")}>Portfolio</Button>
    <Button onClick={action("Button clicked")}>About</Button>
    <Button onClick={action("Button clicked")}>Contact</Button>
  </Menu>
));
