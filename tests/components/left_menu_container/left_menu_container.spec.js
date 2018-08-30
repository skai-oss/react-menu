import React from "react";
import renderer from "react-test-renderer";

import { LeftMenuContainer } from "../../../src/";

describe("LeftMenuContainer component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<LeftMenuContainer>TEST</LeftMenuContainer>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <LeftMenuContainer className="TEST_CLASS">TEST</LeftMenuContainer>
    );
    expect(cmp).toMatchSnapshot();
  });
});
