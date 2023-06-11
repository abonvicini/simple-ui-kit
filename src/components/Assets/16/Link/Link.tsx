import * as React from "react";
import type { SVGProps } from "react";
const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Link__clip0_37_4365)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.667 8.666a3.333 3.333 0 005.027.36l2-2A3.333 3.333 0 008.98 2.313l-1.146 1.14" />
      <path d="M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14" />
    </g>
    <defs>
      <clipPath id="Link__clip0_37_4365">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Link;
