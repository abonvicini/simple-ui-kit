import * as React from "react";
import type { SVGProps } from "react";
const Copy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Copy__clip0_37_4310)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.333 6h-6C6.597 6 6 6.597 6 7.333v6c0 .737.597 1.334 1.333 1.334h6c.737 0 1.334-.597 1.334-1.334v-6c0-.736-.597-1.333-1.334-1.333z" />
      <path d="M3.333 10h-.667a1.333 1.333 0 01-1.333-1.333v-6a1.333 1.333 0 011.333-1.333h6A1.333 1.333 0 0110 2.667v.667" />
    </g>
    <defs>
      <clipPath id="Copy__clip0_37_4310">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Copy;
