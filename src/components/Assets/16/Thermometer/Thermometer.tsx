import * as React from "react";
import type { SVGProps } from "react";
const Thermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Thermometer__clip0_37_4477)">
      <path
        d="M9.334 2.333V9.84A3 3 0 116 9.84V2.333a1.667 1.667 0 113.334 0z"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Thermometer__clip0_37_4477">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Thermometer;
