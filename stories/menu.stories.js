import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { Menu, Button, LeftMenu, RightMenu } from "../src/";

import styles from "./story_book.scss";

storiesOf("Menu", module)
  .addDecorator(withKnobs)
  .add("with button", () => (
    <Menu className={styles.menu}>
      <Button
        onClick={action("Button clicked")}
        isDisabled={boolean("disabled", false)}
        className={text("custom className", `${styles.custom_button}`)}
        disabledClassName={text(
          "custom disabledClassName",
          `${styles.custom_button_disabled}`
        )}
      >
        Button
      </Button>
    </Menu>
  ))
  .add("with left / right menu", () => (
    <Menu className={styles.menu}>
      <LeftMenu>
        <Button onClick={action("Button clicked")}>Left</Button>
        <Button onClick={action("Button clicked")}>Button</Button>
      </LeftMenu>
      <RightMenu>
        <Button onClick={action("Button clicked")}>Right</Button>
        <Button onClick={action("Button clicked")}>Button</Button>
      </RightMenu>
    </Menu>
  ));
