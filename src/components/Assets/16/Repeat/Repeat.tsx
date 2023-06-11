import * as React from "react";
import type { SVGProps } from "react";
const Repeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Repeat__clip0_37_4393)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.333.667L14 3.333 11.333 6" />
      <path d="M2 7.333V6a2.667 2.667 0 012.667-2.667H14M4.667 15.333L2 12.667 4.667 10" />
      <path d="M14 8.666V10a2.667 2.667 0 01-2.667 2.666H2" />
    </g>
    <defs>
      <clipPath id="Repeat__clip0_37_4393">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Repeat;
