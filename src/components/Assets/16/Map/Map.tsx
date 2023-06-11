import * as React from "react";
import type { SVGProps } from "react";
const Map = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Map__clip0_37_4540)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M.667 14.667V4l4.667-2.667L10.667 4l4.667-2.667V12l-4.667 2.667L5.334 12 .667 14.667zM5.333 1.333V12M10.667 4v10.667" />
    </g>
    <defs>
      <clipPath id="Map__clip0_37_4540">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Map;
