import React from "react";
import renderer from "react-test-renderer";

import DropdownItem from "../../../../src/components/dropdown/dropdown_item/dropdown_item";

describe("DropdownItem component", () => {
  test("default snapshot", () => {
    const cmp = renderer.create(<DropdownItem />);
    expect(cmp).toMatchSnapshot();
  });

  test("renders children", () => {
    const cmp = renderer.create(<DropdownItem>TEST</DropdownItem>);
    expect(cmp).toMatchSnapshot();
  });

  test("className prop", () => {
    const cmp = renderer.create(
      <DropdownItem className="TEST">TEST</DropdownItem>
    );
    expect(cmp).toMatchSnapshot();
  });
});
