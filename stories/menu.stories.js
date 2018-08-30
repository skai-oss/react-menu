import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import SampleDropDownMenuItem from "./sample_dropdown_menu_item";
import { Button, LeftMenuContainer, Menu, RightMenuContainer } from "../src/";

import styles from "./story_book.scss";
import Dropdown from "../src/components/dropdown/dropdown";

storiesOf("Menu", module)
  .add("Default view", () => (
    <Menu>
      <Button>Button</Button>
      <Dropdown label={"Dropdown"}>
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 3</SampleDropDownMenuItem>
      </Dropdown>
    </Menu>
  ))
  .add("with left / right menu", () => (
    <Menu className={styles.menu}>
      <LeftMenuContainer>
        <Button
          className={styles.custom_button}
          onClick={action("Button clicked")}
        >
          Left
        </Button>
        <Button
          className={styles.custom_button}
          onClick={action("Button clicked")}
        >
          Button
        </Button>
      </LeftMenuContainer>
      <RightMenuContainer>
        <Button
          className={styles.custom_button}
          onClick={action("Button clicked")}
        >
          Right
        </Button>
        <Button
          className={styles.custom_button}
          onClick={action("Button clicked")}
        >
          Button
        </Button>
      </RightMenuContainer>
    </Menu>
  ));

storiesOf("Dropdown", module)
  .add("Simple", () => (
    <Menu>
      <Dropdown
        label={"Simple"}
        onClick={action("item clicked")}
        isDisabled={boolean("disabled", false)}
        className={text("custom className", `${styles.custom_dropdown}`)}
        disabledClassName={text(
          "custom disabledClassName",
          `${styles.custom_dropdown_disabled}`
        )}
      >
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 3</SampleDropDownMenuItem>
      </Dropdown>
    </Menu>
  ))
  .add("Cascading dropdowns", () => (
    <Menu>
      <Dropdown
        label={"Cascading"}
        onClick={action("item clicked")}
        isDisabled={boolean("disabled", false)}
        className={text("className", `${styles.custom_dropdown}`)}
        disabledClassName={text(
          "disabledClassName",
          `${styles.custom_dropdown_disabled}`
        )}
      >
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
        <Dropdown label={"Sub Menu"}>
          <SampleDropDownMenuItem>sub item 1</SampleDropDownMenuItem>
          <SampleDropDownMenuItem>sub item 2</SampleDropDownMenuItem>
        </Dropdown>
      </Dropdown>
    </Menu>
  ));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Simple", () => (
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
  ));
