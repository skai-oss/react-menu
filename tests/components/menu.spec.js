import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import Menu from "../../src/components/menu";

const ACTIVE_INDEX = 1;

describe("Menu component", () => {
  test("renders children", () => {
    const cmp = renderer.create(
      <Menu>
        <div>TEST</div>
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("recieves className", () => {
    const cmp = renderer.create(
      <Menu className="TEST_CLASS">
        <div>TEST</div>
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("recieves activeIndex", () => {
    const cmp = renderer.create(
      <Menu activeIndex={ACTIVE_INDEX}>
        <div>TEST</div>
      </Menu>
    );
    expect(cmp).toMatchSnapshot();
  });

  test("componentDidMount with activeIndex will trigger addEventListener", () => {
    global.addEventListener = jest.fn();
    const wrapper = shallow(<Menu activeIndex={ACTIVE_INDEX} />);
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(global.addEventListener).toBeCalled();
  });

  test("componentDidMount with activeIndex will set state", () => {
    const wrapper = shallow(<Menu activeIndex={ACTIVE_INDEX} />);
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(instance.state.activeIndex).toBe(ACTIVE_INDEX);
    expect(instance.state.active).toBe(true);
    expect(instance.state.innerUpdate).toBe(false);
  });

  test("componentDidUpdate with active state will trigger addEventListener", () => {
    global.addEventListener = jest.fn();
    const wrapper = shallow(<Menu />);
    const instance = wrapper.instance();
    instance.state.active = true;
    instance.componentDidUpdate();
    expect(global.addEventListener).toBeCalled();
  });

  test("componentDidUpdate with non active state will not trigger addEventListener", () => {
    global.addEventListener = jest.fn();
    const wrapper = shallow(<Menu />);
    const instance = wrapper.instance();
    instance.componentDidUpdate();
    expect(global.addEventListener).not.toHaveBeenCalled();
  });

  test("getDerivedStateFromProps with inner update and activeIndex different between state and props", () => {
    const props = { activeIndex: ACTIVE_INDEX };
    const state = { innerUpdate: true, active: false };
    const newState = Menu.getDerivedStateFromProps(props, state);
    expect(newState.activeIndex).toBe(undefined);
    expect(newState.active).toBe(false);
    expect(newState.innerUpdate).toBe(false);
  });

  test("getDerivedStateFromProps with external update and activeIndex different between state and props", () => {
    const props = { activeIndex: ACTIVE_INDEX };
    const state = { innerUpdate: false, active: false };
    const newState = Menu.getDerivedStateFromProps(props, state);
    expect(newState.activeIndex).toBe(ACTIVE_INDEX);
    expect(newState.active).toBe(true);
    expect(newState.innerUpdate).toBe(false);
  });

  test("getDerivedStateFromProps with external update and activeIndex undefined will set active in state", () => {
    const props = { activeIndex: undefined };
    const state = { innerUpdate: false, activeIndex: ACTIVE_INDEX };
    const newState = Menu.getDerivedStateFromProps(props, state);
    expect(newState.activeIndex).toBe(undefined);
    expect(newState.active).toBe(false);
    expect(newState.innerUpdate).toBe(false);
  });

  test("getDerivedStateFromProps with external update and activeIndex same in props and state", () => {
    const props = { activeIndex: ACTIVE_INDEX };
    const state = { innerUpdate: false, activeIndex: ACTIVE_INDEX };
    const newState = Menu.getDerivedStateFromProps(props, state);
    expect(newState).toBe(null);
  });
});
