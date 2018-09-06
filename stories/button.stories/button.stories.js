import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import { Button, Menu } from "../../src";

import styles from "./button.stories.scss";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Button", () => (
    <Menu>
      <Button onClick={action("Button clicked")}>Button</Button>
      <Button
        onClick={action("Button clicked")}
        isDisabled={boolean("disabled", true)}
      >
        Disabled Button
      </Button>
      <Button
        className={text("custom className", styles.custom_button)}
        onClick={action("Button clicked")}
      >
        Custom Button
      </Button>
      <Button
        disabledClassName={text(
          "custom disabled className",
          styles.disabled_custom_button
        )}
        onClick={action("Button clicked")}
        isDisabled
      >
        Disabled Custom Button
      </Button>
    </Menu>
  ));
