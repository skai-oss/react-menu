import React from "react";
import renderer from "react-test-renderer";

import { Separator } from "../../../src/";

describe("Separator component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<Separator>TEST</Separator>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <Separator className="TEST_CLASS">TEST</Separator>
    );
    expect(cmp).toMatchSnapshot();
  });
});
