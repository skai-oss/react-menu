import styled from "styled-components";
import theme from "../../../../resources/theme";

export default styled.svg`
  font-size: 8px;
  margin: 0 0 0 8px;

  ${({ isDisabled }) =>
    isDisabled &&
    `
  color: ${theme["element-disabled-color"]};
  cursor: default;`};
`;
