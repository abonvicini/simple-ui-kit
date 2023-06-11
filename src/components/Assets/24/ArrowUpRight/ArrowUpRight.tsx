import * as React from "react";
import type { SVGProps } from "react";
const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 17L17 7M7 7h10v10"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowUpRight;
