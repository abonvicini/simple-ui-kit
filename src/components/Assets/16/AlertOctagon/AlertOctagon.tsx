import * as React from "react";
import type { SVGProps } from "react";
const AlertOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#AlertOctagon__clip0_37_4262)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.76 1.333H5.24L1.333 5.24v5.52l3.907 3.907h5.52l3.906-3.907V5.24L10.76 1.333zM8 5.333V8M8 10.666h.007" />
    </g>
    <defs>
      <clipPath id="AlertOctagon__clip0_37_4262">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default AlertOctagon;
