import * as React from "react";
import type { SVGProps } from "react";
const Triangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.82 18l8.47-14.14a2 2 0 013.42 0L22.18 18a2 2 0 01-1.71 3H3.53a2 2 0 01-1.71-3z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Triangle;
