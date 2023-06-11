import * as React from "react";
import type { SVGProps } from "react";
const Codepen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Codepen__clip0_37_4305)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.666 5.667L8 1.334 1.333 5.667v4.667L8 14.667l6.666-4.333V5.667zM8 14.667v-4.333" />
      <path d="M14.666 5.667L8 10.332 1.333 5.666" />
      <path d="M1.333 10.333L8 5.666l6.666 4.667M8 1.333v4.334" />
    </g>
    <defs>
      <clipPath id="Codepen__clip0_37_4305">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Codepen;
