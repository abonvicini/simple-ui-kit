import * as React from "react";
import type { SVGProps } from "react";
const Maximize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.333 2h-2A1.333 1.333 0 002 3.333v2m12 0v-2A1.334 1.334 0 0012.667 2h-2m0 12h2A1.334 1.334 0 0014 12.667v-2m-12 0v2A1.333 1.333 0 003.333 14h2"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Maximize;
