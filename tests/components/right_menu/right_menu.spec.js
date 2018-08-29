import React from "react";
import renderer from "react-test-renderer";

import { RightMenu } from "../../../src/";

describe("RightMenu component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<RightMenu>TEST</RightMenu>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <RightMenu className="TEST_CLASS">TEST</RightMenu>
    );
    expect(cmp).toMatchSnapshot();
  });
});
