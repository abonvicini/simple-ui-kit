import * as React from "react";
import type { SVGProps } from "react";
const Dribbble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Dribbble__clip0_37_4384)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M5.707 1.833c2.913 4.02 4.013 6.28 5.353 11.814m1.693-10.254c-2.48 2.9-5.96 3.774-11.253 3.9m13 1.267c-2.333-.62-4.42-.546-5.96 0-1.72.614-3.34 1.907-4.96 4.213" />
    </g>
    <defs>
      <clipPath id="Dribbble__clip0_37_4384">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Dribbble;
