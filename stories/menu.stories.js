import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import { Button, Menu, Separator } from "../src/";
import { SampleDropDown } from "./sample_dropdown";
import styles from "./story_book.scss";
import Dropdown from "../src/components/dropdown/dropdown";
import { SampleButton } from "./sample_button";
import { SampleItem } from "./sample_item";
import { SampleItemWithSeperator } from "./sample_item_seperator";
import DropdownItem from "../src/components/dropdown/dropdown_item/dropdown_item";
import { DIRECTIONS } from "../src/common/constants";

storiesOf("Menu", module)
  .add("Customized", () => (
    <Menu
      className={styles.advanced_menu}
      openTab={2}
      openTabClassName={styles.advanced_dropdown_open}
    >
      <img
        className={styles.advanced_logo}
        src={"https://cdn.kenshoo.com/resources/logos/kenshoo-logo.svg"}
        height={40}
      />
      <SampleButton onClick={action("button clicked")}>Analysis</SampleButton>
      <SampleDropDown label={"Management"} onClick={action("item clicked")}>
        <Dropdown label="Accounts" direction={DIRECTIONS.RIGHT}>
          <DropdownItem>account 1</DropdownItem>
          <DropdownItem>account 2</DropdownItem>
          <DropdownItem>account 3</DropdownItem>
        </Dropdown>
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
      <SampleButton onClick={action("button clicked")}>Help</SampleButton>
      <SampleDropDown label={"Agency 1"} onClick={action("item clicked")}>
        <SampleItem>Agency 2</SampleItem>
        <SampleItem>Agency 3</SampleItem>
      </SampleDropDown>
      <Separator />
      <SampleDropDown
        label={"user.name@kenshoo.com"}
        onClick={action("item clicked")}
        itemsClassName={styles.big_advanced_item}
      >
        <SampleItem className={styles.big_advanced_item}>Settings</SampleItem>
        <SampleItem>Log out</SampleItem>
      </SampleDropDown>
    </Menu>
  ))
  .add("Default view", () => (
    <Menu>
      <Button isDisabled={true}>Button</Button>
      <Dropdown label={"Dropdown"}>
        <DropdownItem>item 1</DropdownItem>
        <DropdownItem>item 2</DropdownItem>
        <DropdownItem>item 3</DropdownItem>
      </Dropdown>
    </Menu>
  ))
  .add("with Separator", () => (
    <Menu className={styles.menu}>
      <Button
        className={styles.custom_button}
        onClick={action("Button clicked")}
      >
        Custom style button
      </Button>
      <Dropdown label={"Dropdown"}>
        <DropdownItem>item 1</DropdownItem>
        <DropdownItem>item 2</DropdownItem>
        <DropdownItem>item 3</DropdownItem>
      </Dropdown>
      <Separator />
      <Button onClick={action("Button clicked")}>Right button 1</Button>
      <Button onClick={action("Button clicked")}>Right Button 2</Button>
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
