import * as React from "react";
import type { SVGProps } from "react";
const Truck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Truck__clip0_37_4345)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.667 2h-10v8.667h10V2zM13.334 5.333h-2.667v5.334h4.667V7.334l-2-2z" />
      <path d="M3.667 14a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334zM12.334 14a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z" />
    </g>
    <defs>
      <clipPath id="Truck__clip0_37_4345">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Truck;
