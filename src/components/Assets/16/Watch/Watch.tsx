import * as React from "react";
import type { SVGProps } from "react";
const Watch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Watch__clip0_37_4521)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 12.667a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z" />
      <path d="M8 6v2l1 1M11.006 11.566l-.233 2.554a1.333 1.333 0 01-1.333 1.213H6.553A1.334 1.334 0 015.22 14.12l-.234-2.553m.007-7.134l.233-2.553A1.333 1.333 0 016.553.667h2.9a1.333 1.333 0 011.333 1.213l.234 2.553" />
    </g>
    <defs>
      <clipPath id="Watch__clip0_37_4521">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Watch;
