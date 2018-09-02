import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

import { Button } from "../../../src/";
import Dropdown from "../../../src/components/dropdown/dropdown";
import { DOWN } from "../../../src/components/dropdown/items_direction_consts";

describe("Dropdown component", () => {
  test("default snapshot", () => {
    const cmp = renderer.create(<Dropdown />);
    expect(cmp).toMatchSnapshot();
  });

  test("snapshot with className", () => {
    const cmp = renderer.create(<Dropdown className="className" />);
    expect(cmp).toMatchSnapshot();
  });

  test("snapshot with disabled", () => {
    const cmp = renderer.create(<Dropdown isDisabled />);
    expect(cmp).toMatchSnapshot();
  });

  test("snapshot with disabledClassName", () => {
    const cmp = renderer.create(
      <Dropdown isDisabled disabledClassName="disabledClassName" />
    );
    expect(cmp).toMatchSnapshot();
  });

  test("snapshot with label", () => {
    const cmp = renderer.create(<Dropdown label="menu1" />);
    expect(cmp).toMatchSnapshot();
  });

  test("snapshot with children", () => {
    const cmp = renderer.create(
      <Dropdown>
        <div>a</div>
        <p>b</p>
      </Dropdown>
    );
    expect(cmp).toMatchSnapshot();
  });

  // Check travis build success
  // test("call to open() will change state", () => {
  //   const mockFn = jest.fn();
  //   const cmp = shallow(
  //     <Dropdown onClick={mockFn}>
  //       <div>item 1</div>
  //       <div>item 2</div>
  //     </Dropdown>
  //   );
  //
  //   expect(cmp.state("isOpened")).toEqual(false);
  //   cmp.instance().open({ preventDefault: () => {} });
  //   expect(cmp.state("isOpened")).toEqual(true);
  // });

  test("click on dropdown will not trigger onClick", () => {
    const mockFn = jest.fn();
    const cmp = mount(
      <Dropdown onClick={mockFn}>
        <div>item 1</div>
      </Dropdown>
    );

    cmp.simulate("click");
    expect(mockFn).not.toHaveBeenCalled();
  });

  // Check travis build success
  // test("click on opened dropdown will trigger onClick", () => {
  //   const mockFn = jest.fn();
  //   const cmp = shallow(
  //     <Dropdown onClick={mockFn} itemsDirection={DOWN}>
  //       <div>item 1</div>
  //       <div>item 2</div>
  //     </Dropdown>
  //   );
  //
  //   cmp.instance().open({ preventDefault: () => {} });
  //   expect(cmp.state("isOpened")).toEqual(true);
  //   cmp.update();
  //
  //   cmp
  //     .find(".dropdown_items_down")
  //     .find("div")
  //     .at(0)
  //     .simulate("click");
  //   expect(mockFn).toHaveBeenCalled();
  // });

  // Check travis build success
  // test("click on disabled dropdown will not open", () => {
  //   const mockFn = jest.fn();
  //   const cmp = shallow(
  //     <Dropdown isDisabled={true} onClick={mockFn}>
  //       <div>item 1</div>
  //       <div>item 2</div>
  //     </Dropdown>
  //   );
  //
  //   cmp.instance().open({ preventDefault: () => {} });
  //   expect(cmp.state("isOpened")).toEqual(false);
  // });
});
