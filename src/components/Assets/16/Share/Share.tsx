import * as React from "react";
import type { SVGProps } from "react";
const Share = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.667 8v5.333A1.333 1.333 0 004 14.667h8a1.333 1.333 0 001.334-1.334V8M10.666 4L8 1.333 5.333 4M8 1.333V10"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Share;
