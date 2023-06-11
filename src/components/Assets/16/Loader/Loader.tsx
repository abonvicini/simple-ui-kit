import * as React from "react";
import type { SVGProps } from "react";
const Loader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Loader__clip0_37_4369)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 1.333V4M8 12v2.667M3.287 3.287l1.887 1.886M10.827 10.827l1.887 1.886M1.333 8H4M12 8h2.667M3.287 12.713l1.887-1.886M10.827 5.173l1.887-1.886" />
    </g>
    <defs>
      <clipPath id="Loader__clip0_37_4369">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Loader;
