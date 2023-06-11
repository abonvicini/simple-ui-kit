import * as React from "react";
import type { SVGProps } from "react";
const ChevronsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.667 8.666L8 12l3.334-3.334M4.667 4L8 7.333 11.334 4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronsDown;
