import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { Menu, Button } from "../src/";

import styles from "./story_book.scss";

storiesOf("Menu", module)
  .addDecorator(withKnobs)
  .add("with button", () => (
    <Menu>
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
  ));
