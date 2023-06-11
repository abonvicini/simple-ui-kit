import * as React from "react";
import type { SVGProps } from "react";
const Target = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Target__clip0_37_4472)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M8 9.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" />
    </g>
    <defs>
      <clipPath id="Target__clip0_37_4472">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Target;
