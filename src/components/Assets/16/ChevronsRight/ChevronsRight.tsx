import * as React from "react";
import type { SVGProps } from "react";
const ChevronsRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.667 11.333L12 8 8.667 4.667M4 11.333L7.333 8 4 4.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronsRight;
