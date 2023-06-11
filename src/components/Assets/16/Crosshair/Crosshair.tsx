import * as React from "react";
import type { SVGProps } from "react";
const Crosshair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Crosshair__clip0_37_4319)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333zM14.667 8H12M4 8H1.333M8 4V1.333M8 14.667V12" />
    </g>
    <defs>
      <clipPath id="Crosshair__clip0_37_4319">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Crosshair;
