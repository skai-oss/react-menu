import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Dropdown from "../../../src/components/dropdown/dropdown";

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

  test("call to open() will change state", () => {
    const mockFn = jest.fn();
    const cmp = shallow(
      <Dropdown onClick={mockFn}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(cmp.state("isOpen")).toEqual(false);
    cmp.instance().openDropdown({
      stopPropagation: () => {}
    });
    expect(cmp.state("isOpen")).toEqual(true);
  });

  test("call to close() will change state", () => {
    const mockFn = jest.fn();
    const cmp = shallow(
      <Dropdown onClick={mockFn}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(cmp.state("isOpen")).toEqual(false);
    cmp.instance().openDropdown({ stopPropagation: () => {} });
    expect(cmp.state("isOpen")).toEqual(true);
    cmp.instance().closeDropdown({ stopPropagation: () => {} });

    expect(cmp.state("isOpen")).toEqual(false);
  });

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

  test("arrow direction - left", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction="left">
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    cmp.setState({
      isOpen: true
    });

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - bottom", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction="bottom">
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    cmp.setState({
      isOpen: true
    });

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - right", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction="right">
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    cmp.setState({
      isOpen: true
    });

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - unknown", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction="TEST">
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    cmp.setState({
      isOpen: true
    });

    expect(toJson(cmp)).toMatchSnapshot();
  });
});
