import React from "react";
import renderer from "react-test-renderer";
import Menu from "../../src/components/menu";

describe("Menu component", () => {
  test("renders children", () => {
    const cmp = renderer.create(
      <Menu>
        <div>TEST</div>
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <Menu className="TEST_CLASS">
        <div>TEST</div>
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });
});
