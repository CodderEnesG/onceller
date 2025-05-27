import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={8}
    height={6}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 6L8 0L0 0L4 6Z" fill="white" />
  </svg>
);
export default SVGComponent;
