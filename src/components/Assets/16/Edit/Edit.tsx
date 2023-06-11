import * as React from "react";
import type { SVGProps } from "react";
const Edit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Edit__clip0_37_4394)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.333 2.667H2.666A1.333 1.333 0 001.333 4v9.333a1.333 1.333 0 001.333 1.333H12a1.334 1.334 0 001.333-1.333V8.666" />
      <path d="M13.333 1.252c-.375 0-.735.15-1 .415L6 8l-.667 2.667L8 10l6.333-6.333a1.414 1.414 0 00-1-2.415z" />
    </g>
    <defs>
      <clipPath id="Edit__clip0_37_4394">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Edit;
