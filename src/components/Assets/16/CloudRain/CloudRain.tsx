import * as React from "react";
import type { SVGProps } from "react";
const CloudRain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#CloudRain__clip0_37_4303)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.667 8.666V14M5.333 8.666V14M8 10v5.333M13.338 11.053a3.334 3.334 0 00-1.334-6.386h-.84a5.334 5.334 0 10-8.493 5.5" />
    </g>
    <defs>
      <clipPath id="CloudRain__clip0_37_4303">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CloudRain;
