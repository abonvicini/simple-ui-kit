import * as React from "react";
import type { SVGProps } from "react";
const Thermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Thermometer__clip0_18_192)">
      <path
        d="M14 3.5v11.26a4.5 4.5 0 11-5 0V3.5a2.5 2.5 0 115 0z"
        stroke="#2A2E34"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Thermometer__clip0_18_192">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Thermometer;
