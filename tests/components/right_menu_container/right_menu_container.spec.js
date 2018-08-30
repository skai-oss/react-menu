import React from "react";
import renderer from "react-test-renderer";

import { RightMenuContainer } from "../../../src/";

describe("RightMenuContainer component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<RightMenuContainer>TEST</RightMenuContainer>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <RightMenuContainer className="TEST_CLASS">TEST</RightMenuContainer>
    );
    expect(cmp).toMatchSnapshot();
  });
});
