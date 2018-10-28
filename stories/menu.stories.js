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

storiesOf("Menu", module)
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
        Left button 1
      </Button>
      <Dropdown label={"Dropdown"}>
        <DropdownItem>item 1</DropdownItem>
        <DropdownItem>item 2</DropdownItem>
        <DropdownItem>item 3</DropdownItem>
      </Dropdown>
      <Separator />
      <Button
        className={styles.custom_button}
        onClick={action("Button clicked")}
      >
        Right button 1
      </Button>
      <Button
        className={styles.custom_button}
        onClick={action("Button clicked")}
      >
        Right Button 2
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
      <SampleButton onClick={action("button clicked")}>Help</SampleButton>
      <SampleDropDown label={"Agency 1"} onClick={action("item clicked")}>
        <SampleItem>Agency 2</SampleItem>
        <SampleItem>Agency 3</SampleItem>
      </SampleDropDown>
      <SampleButton onClick={action("button clicked")} isDisabled={true}>
        john.smith@kenshoo.com
      </SampleButton>
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
