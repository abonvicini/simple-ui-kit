import * as React from "react";
import type { SVGProps } from "react";
const AlertTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.213 12L6.86 2.573a1.333 1.333 0 012.28 0L14.786 12a1.334 1.334 0 01-1.14 2H2.353a1.332 1.332 0 01-1.14-2zM8 6v2.667M8 11.334h.007"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AlertTriangle;
