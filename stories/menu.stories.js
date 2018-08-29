import React from "react";
import { storiesOf } from "@storybook/react";

import { Menu } from "../src";
import Dropdown from "../src/components/dropdown/dropdown";
import SampleDropDownMenuItem from "./sample_dropdown_menu_item";

storiesOf("Menu", module).add("Default view", () => <Menu />);

storiesOf("Dropdown", module)
  .add("Simple", () => (
    <Menu>
      <Dropdown label={"Simple Menu"}>
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 3</SampleDropDownMenuItem>
      </Dropdown>
    </Menu>
  ))
  .add("Cascading dropdowns", () => (
    <Menu>
      <Dropdown label={"Cascading Menu"}>
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
        <Dropdown label={"Dropdown Sub Menu"}>
          <SampleDropDownMenuItem>sub item 1</SampleDropDownMenuItem>
          <SampleDropDownMenuItem>sub item 2</SampleDropDownMenuItem>
        </Dropdown>
      </Dropdown>
    </Menu>
  ))
  .add("Disabled dropdown", () => (
    <Menu>
      <Dropdown label={"Disabled Menu"} isDisabled={true}>
        <SampleDropDownMenuItem>item 1</SampleDropDownMenuItem>
        <SampleDropDownMenuItem>item 2</SampleDropDownMenuItem>
      </Dropdown>
    </Menu>
  ));
