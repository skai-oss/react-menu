import React from "react";
import styled from "styled-components";
import theme from "../../resources/theme";
import classnames from "classnames";

import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  font-size: 12px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;

  ${({ disabled }) => {
    disabled &&
      `
  color: ${theme["element-disabled-color"]};
  cursor: default;`;
  }};
`;

const Button = ({
  className,
  disabledClassName,
  children,
  isDisabled,
  onClick,
  setActive,
  active,
  ...props
}) => (
  <ButtonWrapper
    className={classnames(className, {
      [disabledClassName]: isDisabled
    })}
    disabled={isDisabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  className: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  className: "",
  disabledClassName: "",
  isDisabled: false,
  children: []
};

export default Button;
