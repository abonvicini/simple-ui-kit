import * as React from "react";
import type { SVGProps } from "react";
const Award = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Award__clip0_37_4272)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10A4.667 4.667 0 108 .667 4.667 4.667 0 008 10z" />
      <path d="M5.474 9.26l-.807 6.073 3.333-2 3.334 2-.807-6.08" />
    </g>
    <defs>
      <clipPath id="Award__clip0_37_4272">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Award;
