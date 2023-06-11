import * as React from "react";
import type { SVGProps } from "react";
const Umbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Umbrella__clip0_37_4515)">
      <path
        d="M12 12.667a2 2 0 11-4 0V8m7.334 0A7.367 7.367 0 00.667 8h14.667z"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Umbrella__clip0_37_4515">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Umbrella;
