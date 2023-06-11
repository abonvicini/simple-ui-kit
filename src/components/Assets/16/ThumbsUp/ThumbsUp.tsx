import * as React from "react";
import type { SVGProps } from "react";
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#ThumbsUp__clip0_37_4330)">
      <path
        d="M4.666 7.333l2.667-6a2 2 0 012 2V6h3.773a1.333 1.333 0 011.334 1.534l-.92 6a1.333 1.333 0 01-1.334 1.133h-7.52m0-7.333v7.333m0-7.333h-2a1.333 1.333 0 00-1.333 1.333v4.667a1.333 1.333 0 001.333 1.333h2"
        stroke="#2A2E34"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="ThumbsUp__clip0_37_4330">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ThumbsUp;
