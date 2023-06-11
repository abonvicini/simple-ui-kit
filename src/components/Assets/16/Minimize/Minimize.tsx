import * as React from "react";
import type { SVGProps } from "react";
const Minimize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.333 2v2A1.333 1.333 0 014 5.333H2m12 0h-2A1.333 1.333 0 0110.667 4V2m0 12v-2A1.333 1.333 0 0112 10.667h2m-12 0h2A1.333 1.333 0 015.333 12v2"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Minimize;
