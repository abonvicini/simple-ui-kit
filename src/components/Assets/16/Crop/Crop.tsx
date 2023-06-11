import * as React from "react";
import type { SVGProps } from "react";
const Crop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Crop__clip0_37_4372)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.087.667l-.087 10A1.333 1.333 0 005.333 12h10" />
      <path d="M.667 4.087l10-.087A1.333 1.333 0 0112 5.333v10" />
    </g>
    <defs>
      <clipPath id="Crop__clip0_37_4372">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Crop;
