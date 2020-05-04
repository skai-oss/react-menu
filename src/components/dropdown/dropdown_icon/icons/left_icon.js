import React from "react";
import Icon from "./icon";

const LeftIcon = ({ className }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M14 8l-4 4 4 4"
    />
  </Icon>
);

export default LeftIcon;
