import * as React from "react";
import type { SVGProps } from "react";
const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Eye__clip0_37_4324)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2.667C3.334 2.667.667 8 .667 8S3.334 13.333 8 13.333c4.667 0 7.334-5.333 7.334-5.333S12.667 2.667 8 2.667z" />
      <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
    </g>
    <defs>
      <clipPath id="Eye__clip0_37_4324">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Eye;
