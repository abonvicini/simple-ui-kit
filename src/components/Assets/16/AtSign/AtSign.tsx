import * as React from "react";
import type { SVGProps } from "react";
const AtSign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#AtSign__clip0_37_4297)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10.667a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333z" />
      <path d="M10.666 5.334v3.333a2 2 0 004 0V8a6.666 6.666 0 10-2.613 5.294" />
    </g>
    <defs>
      <clipPath id="AtSign__clip0_37_4297">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default AtSign;
