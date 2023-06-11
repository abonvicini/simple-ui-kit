import * as React from "react";
import type { SVGProps } from "react";
const Sliders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Sliders__clip0_37_4382)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.667 14V9.334M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.334M13.333 8V2M.667 9.334h4M6 5.333h4M11.333 10.666h4" />
    </g>
    <defs>
      <clipPath id="Sliders__clip0_37_4382">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Sliders;
