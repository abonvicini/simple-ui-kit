import * as React from "react";
import type { SVGProps } from "react";
const File = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 1.333h4.667L13.334 6v7.334A1.333 1.333 0 0112 14.667H4a1.333 1.333 0 01-1.333-1.333V2.667A1.333 1.333 0 014 1.334z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.667 1.333V6h4.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default File;
