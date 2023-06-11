import * as React from "react";
import type { SVGProps } from "react";
const ArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#ArrowDownCircle__clip0_37_4292)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 14.667A6.667 6.667 0 108 1.334a6.667 6.667 0 000 13.333z" />
      <path d="M5.333 8L8 10.667 10.666 8M8 5.333v5.334" />
    </g>
    <defs>
      <clipPath id="ArrowDownCircle__clip0_37_4292">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowDownCircle;
