import * as React from "react";
import type { SVGProps } from "react";
const MapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#MapPin__clip0_37_4497)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 15.333s6-4 6-8.666a6 6 0 10-12 0c0 4.666 6 8.666 6 8.666z" />
      <path d="M8 8.666a2 2 0 100-4 2 2 0 000 4z" />
    </g>
    <defs>
      <clipPath id="MapPin__clip0_37_4497">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MapPin;
