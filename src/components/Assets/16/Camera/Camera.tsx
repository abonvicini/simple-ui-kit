import * as React from "react";
import type { SVGProps } from "react";
const Camera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Camera__clip0_37_4284)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.943 13.61c.25-.25.39-.59.39-.943V5.333A1.333 1.333 0 0014 4h-2.666L10 2H6L4.667 4H2A1.333 1.333 0 00.667 5.333v7.334A1.333 1.333 0 002 14h12c.354 0 .693-.14.943-.39z" />
      <path d="M8 11.333A2.667 2.667 0 108 6a2.667 2.667 0 000 5.333z" />
    </g>
    <defs>
      <clipPath id="Camera__clip0_37_4284">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Camera;
