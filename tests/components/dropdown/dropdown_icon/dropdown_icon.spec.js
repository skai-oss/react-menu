import React from "react";
import renderer from "react-test-renderer";
import { DIRECTIONS } from "../../../../src/common/constants";
import DropdownIcon from "../../../../src/components/dropdown/dropdown_icon/dropdown_icon";

describe("DropdownIcon component", () => {
  test("default snapshot", () => {
    const cmp = renderer.create(<DropdownIcon />);
    expect(cmp).toMatchSnapshot();
  });

  test("className prop", () => {
    const cmp = renderer.create(<DropdownIcon clasName="TEST" />);
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - left", () => {
    const cmp = renderer.create(<DropdownIcon direction={DIRECTIONS.LEFT} />);
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - bottom", () => {
    const cmp = renderer.create(<DropdownIcon direction={DIRECTIONS.BOTTOM} />);
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - right", () => {
    const cmp = renderer.create(<DropdownIcon direction={DIRECTIONS.RIGHT} />);
    expect(cmp).toMatchSnapshot();
  });

  test("arrow direction - unknown", () => {
    const cmp = renderer.create(<DropdownIcon direction="TEST" />);
    expect(cmp).toMatchSnapshot();
  });

  test("disabled prop", () => {
    const cmp = renderer.create(<DropdownIcon isDisabled />);
    expect(cmp).toMatchSnapshot();
  });

  test("disabledClassName prop", () => {
    const cmp = renderer.create(
      <DropdownIcon isDisabled disabledClassName="TEST" />
    );
    expect(cmp).toMatchSnapshot();
  });
});
