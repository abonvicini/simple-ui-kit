import * as React from "react";
import type { SVGProps } from "react";
const Save = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 14h9.334A1.334 1.334 0 0014 12.667V5.333L10.667 2H3.333A1.333 1.333 0 002 3.333v9.334A1.333 1.333 0 003.333 14z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.334 14V8.666H4.667V14M4.667 2v3.333H10"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Save;
