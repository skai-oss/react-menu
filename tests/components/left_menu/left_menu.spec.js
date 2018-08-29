import React from "react";
import renderer from "react-test-renderer";

import { LeftMenu } from "../../../src/";

describe("LeftMenu component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<LeftMenu>TEST</LeftMenu>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <LeftMenu className="TEST_CLASS">TEST</LeftMenu>
    );
    expect(cmp).toMatchSnapshot();
  });
});
