import * as React from "react";
import type { SVGProps } from "react";
const Frown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Frown__clip0_37_4347)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M10.666 10.667S9.666 9.334 8 9.334c-1.667 0-2.667 1.333-2.667 1.333M6 6h.007M10 6h.007" />
    </g>
    <defs>
      <clipPath id="Frown__clip0_37_4347">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Frown;
