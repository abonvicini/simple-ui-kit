import * as React from "react";
import type { SVGProps } from "react";
const GitCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#GitCommit__clip0_37_4495)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10.667a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM.7 8h3.967M11.34 8h3.966" />
    </g>
    <defs>
      <clipPath id="GitCommit__clip0_37_4495">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GitCommit;
