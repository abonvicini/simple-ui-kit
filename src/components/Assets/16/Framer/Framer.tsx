import * as React from "react";
import type { SVGProps } from "react";
const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Framer__clip0_37_4518)">
      <path
        d="M3.333 10.667V6h9.333V1.333H3.333l9.333 9.334H8m-4.667 0H8m-4.667 0L8 15.334v-4.667"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="Framer__clip0_37_4518">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Framer;
