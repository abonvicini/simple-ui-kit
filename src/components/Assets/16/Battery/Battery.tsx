import * as React from "react";
import type { SVGProps } from "react";
const Battery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Battery__clip0_37_4274)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.334 4H2C1.264 4 .667 4.597.667 5.333v5.334C.667 11.403 1.264 12 2 12h9.334c.736 0 1.333-.597 1.333-1.333V5.333c0-.736-.597-1.333-1.333-1.333zM15.333 8.667V7.334" />
    </g>
    <defs>
      <clipPath id="Battery__clip0_37_4274">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Battery;
