import * as React from "react";
import type { SVGProps } from "react";
const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Layers__clip0_37_4363)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1.333 4.667L8 1.334l6.666 3.333L8 8 1.333 4.667zM1.333 11.334L8 14.667l6.666-3.333M1.333 8L8 11.333 14.666 8" />
    </g>
    <defs>
      <clipPath id="Layers__clip0_37_4363">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Layers;
