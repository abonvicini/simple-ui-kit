import * as React from "react";
import type { SVGProps } from "react";
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 1.333h2V4h-2a.667.667 0 00-.666.667v2H12l-.666 2.667h-2v5.333H6.667V9.334h-2V6.667h2v-2A3.333 3.333 0 0110 1.334z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Facebook;
