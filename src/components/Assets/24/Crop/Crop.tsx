import * as React from "react";
import type { SVGProps } from "react";
const Crop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Crop__clip0_18_796)"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.13 1L6 16a2 2 0 002 2h15" />
      <path d="M1 6.13L16 6a2 2 0 012 2v15" />
    </g>
    <defs>
      <clipPath id="Crop__clip0_18_796">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Crop;
