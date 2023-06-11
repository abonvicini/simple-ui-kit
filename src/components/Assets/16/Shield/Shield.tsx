import * as React from "react";
import type { SVGProps } from "react";
const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.334 8c0 4-5.334 6.667-5.334 6.667S2.667 12 2.667 8V3.333l5.333-2 5.334 2V8z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Shield;
