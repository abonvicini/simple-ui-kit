import * as React from "react";
import type { SVGProps } from "react";
const PenTool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#PenTool__clip0_37_4460)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.667 8L8 12.667l2 2L14.667 10l-2-2z" />
      <path d="M11 3.667l1 5L8.666 12l-5-1-2.333-9.666L11 3.667zM1.333 1.333L6.39 6.391" />
      <path d="M7.333 8.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667z" />
    </g>
    <defs>
      <clipPath id="PenTool__clip0_37_4460">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PenTool;
