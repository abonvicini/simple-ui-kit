import * as React from "react";
import type { SVGProps } from "react";
const Coffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Coffee__clip0_37_4307)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5.333h.667a2.667 2.667 0 010 5.334H12M12 5.333H1.333v6A2.667 2.667 0 004 14h5.333A2.667 2.667 0 0012 11.334v-6zM4 .667v2M6.667.667v2M9.333.667v2" />
    </g>
    <defs>
      <clipPath id="Coffee__clip0_37_4307">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Coffee;
