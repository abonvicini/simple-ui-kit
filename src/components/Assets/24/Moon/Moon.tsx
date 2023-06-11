import * as React from "react";
import type { SVGProps } from "react";
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.158 17.467A9 9 0 0021 12.79 7 7 0 0111.21 3a9 9 0 107.948 14.467z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Moon;
