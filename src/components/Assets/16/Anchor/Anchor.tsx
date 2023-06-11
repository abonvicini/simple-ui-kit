import * as React from "react";
import type { SVGProps } from "react";
const Anchor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Anchor__clip0_37_4462)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5.333a2 2 0 100-4 2 2 0 000 4zM8 14.667V5.333M3.333 8h-2a6.666 6.666 0 1013.333 0h-2" />
    </g>
    <defs>
      <clipPath id="Anchor__clip0_37_4462">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Anchor;
