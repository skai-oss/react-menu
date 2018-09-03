import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import {
  Button,
  LeftMenuContainer,
  Menu,
  RightMenuContainer,
  Separator
} from "../src/";
import { SampleDropDown } from "./sample_dropdown";
import styles from "./story_book.scss";
import Dropdown from "../src/components/dropdown/dropdown";
import { SampleButton } from "./sample_button";
import { SampleItem } from "./sample_item";
import { SampleItemWithSeperator } from "./sample_item_seperator";

storiesOf("Menu", module)
  .add("Default view", () => (
    <Menu>
      <Button isDisabled={true}>Button</Button>
      <Dropdown label={"Dropdown"}>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
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
  ))
  .add("with Separator", () => (
    <Menu className={styles.menu}>
      <Button
        className={styles.custom_button}
        onClick={action("Button clicked")}
      >
        Left
      </Button>
      <Separator />
      <Button
        className={styles.custom_button}
        onClick={action("Button clicked")}
      >
        Button
      </Button>
    </Menu>
  ))
  .add("Advanced", () => (
    <Menu className={styles.advanced_menu}>
      <img
        className={styles.advanced_logo}
        src={"http://logo.kenh.net/logo/kenshoo.svg.png"}
        height={40}
      />
      <SampleButton onClick={action("button clicked")}>Analysis</SampleButton>
      <SampleDropDown label={"Management"} onClick={action("item clicked")}>
        <SampleItem>Accounts</SampleItem>
        <SampleItem>Automated Actions</SampleItem>
        <SampleItem>Automation History</SampleItem>
        <SampleItem>Change Log</SampleItem>
        <SampleItem>Custom Metric</SampleItem>
        <SampleItemWithSeperator>Bulk Actions</SampleItemWithSeperator>
      </SampleDropDown>
      <SampleDropDown label={"Optimizations"} onClick={action("item clicked")}>
        <SampleItem>Halogen Inform</SampleItem>
        <SampleItem>Budget Manager</SampleItem>
      </SampleDropDown>
      <RightMenuContainer>
        <SampleButton onClick={action("button clicked")}>Help</SampleButton>
        <SampleDropDown label={"Agency 1"} onClick={action("item clicked")}>
          <SampleItem>Agency 2</SampleItem>
          <SampleItem>Agency 3</SampleItem>
        </SampleDropDown>
        <SampleButton onClick={action("button clicked")} isDisabled={true}>
          john.smith@kenshoo.com
        </SampleButton>
      </RightMenuContainer>
    </Menu>
  ));

storiesOf("Dropdown", module)
  .add("Simple", () => (
    <Menu>
      <Dropdown label={"Simple"} onClick={action("item clicked")}>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Dropdown>
      <Dropdown
        label={"Dimple"}
        onClick={action("item clicked")}
        isDisabled={boolean("disabled", false)}
        className={text("custom className", `${styles.custom_dropdown}`)}
        disabledClassName={text(
          "custom disabledClassName",
          `${styles.custom_dropdown_disabled}`
        )}
        itemsClassName={text(
          "custom itemsClassName",
          `${styles.custom_dropdown_items}`
        )}
      >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Dropdown>
    </Menu>
  ))
  .add("Cascading", () => (
    <Menu>
      <Dropdown
        label={"Cascading"}
        onClick={action("item clicked")}
        isDisabled={boolean("disabled", false)}
        className={text("custom className", `${styles.custom_dropdown}`)}
        disabledClassName={text(
          "custom disabledClassName",
          `${styles.custom_dropdown_disabled}`
        )}
        itemsClassName={text(
          "custom itemsClassName",
          `${styles.custom_dropdown_items}`
        )}
      >
        <div>item 1</div>
        <div>item 2</div>
        <Dropdown label={"Sub Menu"}>
          <div>sub item 1</div>
          <div>sub item 2</div>
        </Dropdown>
      </Dropdown>
    </Menu>
  ));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Simple", () => (
    <Menu className={styles.menu}>
      <Button onClick={action("Button clicked")} isDisabled={true}>
        Button
      </Button>
    </Menu>
  ));
