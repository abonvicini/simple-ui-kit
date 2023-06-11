import * as React from "react";
import type { SVGProps } from "react";
const ToggleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#ToggleLeft__clip0_37_4531)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.667 3.333H5.334a4.667 4.667 0 100 9.334h5.333a4.667 4.667 0 100-9.334z" />
      <path d="M5.333 10a2 2 0 100-4 2 2 0 000 4z" />
    </g>
    <defs>
      <clipPath id="ToggleLeft__clip0_37_4531">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ToggleLeft;
