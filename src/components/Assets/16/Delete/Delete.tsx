import * as React from "react";
import type { SVGProps } from "react";
const Delete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Delete__clip0_37_4320)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.334 2.667H14A1.333 1.333 0 0115.334 4v8A1.333 1.333 0 0114 13.333H5.334L.667 8l4.667-5.333zM12 6l-4 4M8 6l4 4" />
    </g>
    <defs>
      <clipPath id="Delete__clip0_37_4320">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Delete;
