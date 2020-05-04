import React from "react";
import styled from "styled-components";
import theme from "../../../resources/theme";

const DropdownItem = styled.div`
  padding: 12px;
  background: ${theme["white"]};
  white-space: nowrap;

  &:hover {
    background: ${theme["light-gray"]};
  }
`;

export default DropdownItem;
