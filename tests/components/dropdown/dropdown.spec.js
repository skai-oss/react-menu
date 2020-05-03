import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { DIRECTIONS } from "../../../src/common/constants";
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

  test("snapshot with active", () => {
    const cmp = shallow(
      <Dropdown active>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );
    cmp.instance().onMouseEnter(1);
    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("snapshot with active and disbaled", () => {
    const cmp = shallow(
      <Dropdown active isDisabled>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );
    cmp.instance().onMouseEnter(1);
    expect(toJson(cmp)).toMatchSnapshot();
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

  test("call to onMouseEnter will not change state when not active", () => {
    const mockFn = jest.fn();
    const cmp = shallow(
      <Dropdown>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(cmp.state("activeIndex")).toEqual(undefined);
    cmp.instance().onMouseEnter(2);
    expect(cmp.state("activeIndex")).toEqual(undefined);
  });

  test("call to onMouseEnter will change state when active", () => {
    const mockFn = jest.fn();
    const cmp = shallow(
      <Dropdown active>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(cmp.state("activeIndex")).toEqual(undefined);
    cmp.instance().onMouseEnter(2);
    expect(cmp.state("activeIndex")).toEqual(2);
  });
  test("call to onClick has no exception when props are empty", () => {
    const cmp = shallow(
      <Dropdown active>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    cmp.instance().onClick();
  });

  test("arrow direction - left", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction={DIRECTIONS.LEFT}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - bottom", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction={DIRECTIONS.BOTTOM}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - right", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction={DIRECTIONS.RIGHT}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - bottom_left", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction={DIRECTIONS.BOTTOM_LEFT}>
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(toJson(cmp)).toMatchSnapshot();
  });

  test("arrow direction - unknown", () => {
    const cmp = mount(
      <Dropdown label="TEST" direction="TEST">
        <div>item 1</div>
        <div>item 2</div>
      </Dropdown>
    );

    expect(toJson(cmp)).toMatchSnapshot();
  });
});
