import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import { Button } from "../../../src/";

describe("Button component", () => {
  test("renders children", () => {
    const cmp = renderer.create(<Button>TEST</Button>);
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(<Button className="TEST_CLASS">TEST</Button>);
    expect(cmp).toMatchSnapshot();
  });

  test("disabled button", () => {
    const cmp = renderer.create(
      <Button isDisabled onClick={mockFn}>
        TEST
      </Button>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("triggers onClick", () => {
    const mockFn = jest.fn();
    const cmp = shallow(<Button onClick={mockFn}>TEST</Button>);

    cmp.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
