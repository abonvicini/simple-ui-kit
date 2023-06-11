import * as React from "react";
import type { SVGProps } from "react";
const MicOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#MicOff__clip0_18_492)"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
      <path d="M17 16.91a7.012 7.012 0 01-3.594 1.948 7.038 7.038 0 01-4.075-.384 6.992 6.992 0 01-3.163-2.584A6.932 6.932 0 015 11.989V10m14 0v1.989c0 .41-.037.82-.11 1.223M12 19v4M8 23h8" />
    </g>
    <defs>
      <clipPath id="MicOff__clip0_18_492">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MicOff;
