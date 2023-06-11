import * as React from "react";
import type { SVGProps } from "react";
const ChevronsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.334 7.333L9.667 5.667 8 4 4.667 7.333M11.334 12L8 8.666 4.667 12"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronsUp;
