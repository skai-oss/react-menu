import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { DIRECTIONS } from "../src/common/constants";
import { Menu } from "../src";
import Dropdown from "../src/components/dropdown/dropdown";
import DropdownItem from "../src/components/dropdown/dropdown_item/dropdown_item";

import styles from "./story_book.scss";

storiesOf("Dropdown", module)
  .addDecorator(withKnobs)
  .add("Simple", () => (
    <Menu>
      <Dropdown isDisabled={boolean("disabled", false)} label="Rock Bands">
        <DropdownItem onClick={action("Item clicked")}>Muse</DropdownItem>
        <DropdownItem onClick={action("Item clicked")}>Pearl Jam</DropdownItem>
        <DropdownItem onClick={action("Item clicked")}>
          Jethro Tull
        </DropdownItem>
      </Dropdown>
    </Menu>
  ))
  .add("Cascading", () => (
    <Menu>
      <Dropdown
        label="Rock Bands"
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
        <DropdownItem>All Bands</DropdownItem>
        <Dropdown label="70's" direction={DIRECTIONS.RIGHT}>
          <DropdownItem>Kiss</DropdownItem>
          <DropdownItem>ZZ Top</DropdownItem>
          <DropdownItem>Bee Gees</DropdownItem>
        </Dropdown>
        <Dropdown label="80's" direction={DIRECTIONS.RIGHT}>
          <DropdownItem>Def Leppard</DropdownItem>
          <DropdownItem>AC/DC</DropdownItem>
          <DropdownItem>The Smiths</DropdownItem>
        </Dropdown>
      </Dropdown>
    </Menu>
  ))
  .add("Dropdown direction", () => (
    <Menu>
      <Dropdown direction={DIRECTIONS.RIGHT} label="Rock Bands">
        <DropdownItem>Muse</DropdownItem>
        <DropdownItem>Pearl Jam</DropdownItem>
        <DropdownItem>Jethro Tull</DropdownItem>
      </Dropdown>
      <Dropdown direction={DIRECTIONS.BOTTOM} label="Rock Bands">
        <DropdownItem>Muse</DropdownItem>
        <DropdownItem>Pearl Jam</DropdownItem>
        <DropdownItem>Jethro Tull</DropdownItem>
      </Dropdown>
      <Dropdown direction={DIRECTIONS.LEFT} label="Rock Bands">
        <DropdownItem>Muse</DropdownItem>
        <DropdownItem>Pearl Jam</DropdownItem>
        <DropdownItem>Jethro Tull</DropdownItem>
      </Dropdown>
    </Menu>
  ));
