import * as React from "react";
import type { SVGProps } from "react";
const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Cloud__clip0_18_896)">
      <path
        d="M16.74 10H18a5 5 0 110 10H9a8 8 0 117.74-10z"
        stroke="#2A2E34"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Cloud__clip0_18_896">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Cloud;
