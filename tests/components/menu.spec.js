import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "../../src/";

describe("Menu component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<Menu>TEST</Menu>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(<Menu className="TEST_CLASS">TEST</Menu>);
    expect(cmp).toMatchSnapshot();
  });
});
