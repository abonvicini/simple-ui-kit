import * as React from "react";
import type { SVGProps } from "react";
const EyeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#EyeOff__clip0_37_4326)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.96 11.96A6.714 6.714 0 018 13.333C3.334 13.333.667 8 .667 8A12.3 12.3 0 014.04 4.04M6.6 2.827a6.08 6.08 0 011.4-.16C12.667 2.667 15.334 8 15.334 8c-.405.757-.888 1.47-1.44 2.127m-4.48-.714a2 2 0 11-2.827-2.826M.667.667l14.667 14.666" />
    </g>
    <defs>
      <clipPath id="EyeOff__clip0_37_4326">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default EyeOff;
