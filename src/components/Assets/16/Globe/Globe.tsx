import * as React from "react";
import type { SVGProps } from "react";
const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Globe__clip0_37_4351)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333zM1.333 8h13.333" />
      <path d="M10.666 8A10.2 10.2 0 008 1.333 10.2 10.2 0 005.333 8 10.2 10.2 0 008 14.667 10.2 10.2 0 0010.666 8z" />
    </g>
    <defs>
      <clipPath id="Globe__clip0_37_4351">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Globe;
