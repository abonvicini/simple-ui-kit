import * as React from "react";
import type { SVGProps } from "react";
const Compass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Compass__clip0_37_4309)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M9.413 9.413l1.413-4.24-4.24 1.414-1.413 4.24 4.24-1.414z" />
    </g>
    <defs>
      <clipPath id="Compass__clip0_37_4309">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Compass;
