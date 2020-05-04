import React, { PureComponent } from "react";
import styled from "styled-components";
import theme from "../resources/theme";

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${theme["element-background-color"]};
`;

export default class Menu extends PureComponent {
  state = {
    active: false,
    activeIndex: undefined,
    innerUpdate: false
  };

  componentDidMount() {
    const { activeIndex } = this.props;
    if (activeIndex) {
      window.addEventListener("click", this.toggleActive);
      this.setState({
        activeIndex: activeIndex,
        active: true,
        innerUpdate: false
      });
    }
  }

  componentDidUpdate() {
    if (this.state.active) {
      window.addEventListener("click", this.toggleActive);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.innerUpdate && state.activeIndex !== props.activeIndex) {
      return {
        activeIndex: state.activeIndex,
        active: state.active,
        innerUpdate: false
      };
    } else if (!state.innerUpdate && state.activeIndex !== props.activeIndex) {
      return {
        activeIndex: props.activeIndex,
        active: props.activeIndex ? true : false,
        innerUpdate: false
      };
    } else {
      return null;
    }
  }

  onMouseEnter = (children, activeIndex) => {
    if (this.state.active && Array.isArray(children)) {
      this.setState({ innerUpdate: true, activeIndex });
      this.onChange(activeIndex);
    }
  };

  toggleActive = (event, activeIndex) => {
    event.stopPropagation();
    if (this.state.active) {
      window.removeEventListener("click", this.toggleActive);
      this.setState({
        active: false,
        activeIndex: undefined,
        innerUpdate: true
      });
      this.onChange(undefined);
    } else {
      window.addEventListener("click", this.toggleActive);
      this.setState({ active: true, innerUpdate: true, activeIndex });
      this.onChange(activeIndex);
    }
  };

  onChange = activeIndex => {
    this.props.onChange && this.props.onChange(activeIndex);
  };

  render() {
    const { className, children } = this.props;
    const { activeIndex } = this.state;

    return (
      <MenuWrapper className={className}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            onMouseEnter: () => this.onMouseEnter(child.props.children, index),
            setActive: event => this.toggleActive(event, index),
            active: activeIndex === index
          })
        )}
      </MenuWrapper>
    );
  }
}
