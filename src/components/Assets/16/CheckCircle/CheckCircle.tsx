import * as React from "react";
import type { SVGProps } from "react";
const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#CheckCircle__clip0_37_4288)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.666 7.387V8a6.667 6.667 0 11-3.953-6.093" />
      <path d="M14.667 2.667L8 9.34l-2-2" />
    </g>
    <defs>
      <clipPath id="CheckCircle__clip0_37_4288">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CheckCircle;
