import * as React from "react";
import type { SVGProps } from "react";
const CheckSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 7.333l2 2 6.667-6.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8v4.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V3.333A1.333 1.333 0 013.333 2h7.334"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CheckSquare;
