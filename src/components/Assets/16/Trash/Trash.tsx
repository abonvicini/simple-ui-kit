import * as React from "react";
import type { SVGProps } from "react";
const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.333-1.333h2.667a1.333 1.333 0 011.333 1.333V4m2 0v9.334a1.333 1.333 0 01-1.333 1.333H4.666a1.333 1.333 0 01-1.333-1.333V4h9.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Trash;
