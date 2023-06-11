import * as React from "react";
import type { SVGProps } from "react";
const ThumbsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#ThumbsDown__clip0_37_4479)">
      <path
        d="M11.333 8.667l-2.666 6a2 2 0 01-2-2V10H2.893A1.333 1.333 0 011.56 8.467l.92-6a1.333 1.333 0 011.333-1.134h7.52m0 7.334V1.333m0 7.334h1.78a1.54 1.54 0 001.554-1.334V2.667a1.54 1.54 0 00-1.554-1.334h-1.78"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="ThumbsDown__clip0_37_4479">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ThumbsDown;
