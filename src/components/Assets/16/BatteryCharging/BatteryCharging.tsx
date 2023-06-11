import * as React from "react";
import type { SVGProps } from "react";
const BatteryCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#BatteryCharging__clip0_37_4275)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.334 12H2a1.334 1.334 0 01-1.333-1.333V5.333A1.333 1.333 0 012 4h2.127M10 4h1.334a1.333 1.333 0 011.333 1.333v5.334A1.334 1.334 0 0111.334 12H9.207M15.333 8.667V7.334M7.334 4L4.667 8h4L6 12" />
    </g>
    <defs>
      <clipPath id="BatteryCharging__clip0_37_4275">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default BatteryCharging;
