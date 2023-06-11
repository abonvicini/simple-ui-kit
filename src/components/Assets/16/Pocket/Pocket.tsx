import * as React from "react";
import type { SVGProps } from "react";
const Pocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 2H2.666a1.333 1.333 0 00-1.333 1.333v4a6.667 6.667 0 0013.333 0v-4A1.333 1.333 0 0013.333 2z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.333 6.667L8 9.332l2.666-2.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Pocket;
