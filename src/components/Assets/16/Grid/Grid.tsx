import * as React from "react";
import type { SVGProps } from "react";
const Grid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.667 2H2v4.667h4.667V2zM14 2H9.333v4.667H14V2zM14 9.334H9.333V14H14V9.334zM6.667 9.334H2V14h4.667V9.334z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Grid;
