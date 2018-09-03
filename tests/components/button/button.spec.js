import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

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

  test("disabled Button", () => {
    const cmp = renderer.create(<Button isDisabled>TEST</Button>);
    expect(cmp).toMatchSnapshot();
  });

  test("disabledClassName prop", () => {
    const cmp = renderer.create(
      <Button isDisabled disabledClassName="DISABLED_CLASS">
        TEST
      </Button>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("triggers onClick", () => {
    const mockFn = jest.fn();
    const cmp = mount(<Button onClick={mockFn}>TEST</Button>);

    cmp.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });

  test("cannot click on disabled button", () => {
    const mockFn = jest.fn();
    const cmp = mount(
      <Button isDisabled={true} onClick={mockFn}>
        TEST
      </Button>
    );

    cmp.simulate("click");
    expect(mockFn).not.toHaveBeenCalled();
  });
});
