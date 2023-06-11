import * as React from "react";
import type { SVGProps } from "react";
const Airplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 11.333h-.667A1.333 1.333 0 011.333 10V3.333A1.333 1.333 0 012.666 2h10.667a1.333 1.333 0 011.333 1.333V10a1.333 1.333 0 01-1.333 1.333h-.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.334 14L8 10l-3.333 4h6.667z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Airplay;
