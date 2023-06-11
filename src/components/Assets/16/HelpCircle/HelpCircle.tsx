import * as React from "react";
import type { SVGProps } from "react";
const HelpCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#HelpCircle__clip0_37_4352)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M6.06 6a2 2 0 013.886.667c0 1.333-2 2-2 2M8 11.334h.007" />
    </g>
    <defs>
      <clipPath id="HelpCircle__clip0_37_4352">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HelpCircle;
