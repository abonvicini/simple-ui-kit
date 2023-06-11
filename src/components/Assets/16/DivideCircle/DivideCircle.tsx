import * as React from "react";
import type { SVGProps } from "react";
const DivideCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#DivideCircle__clip0_37_4323)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.333 8h5.333M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
    </g>
    <defs>
      <clipPath id="DivideCircle__clip0_37_4323">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default DivideCircle;
