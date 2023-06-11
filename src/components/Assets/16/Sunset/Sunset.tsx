import * as React from "react";
import type { SVGProps } from "react";
const Sunset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Sunset__clip0_37_4376)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.334 12a3.333 3.333 0 00-6.667 0M8 6V1.333M2.813 6.813l.947.947M.667 12H2M14 12h1.333M12.24 7.76l.947-.947M15.334 14.666H.667M10.666 3.333L8 6 5.333 3.333" />
    </g>
    <defs>
      <clipPath id="Sunset__clip0_37_4376">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Sunset;
