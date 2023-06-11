import * as React from "react";
import type { SVGProps } from "react";
const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Cloud__clip0_37_4299)">
      <path
        d="M11.16 6.667H12a3.333 3.333 0 110 6.666H6a5.333 5.333 0 115.16-6.667z"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Cloud__clip0_37_4299">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Cloud;
