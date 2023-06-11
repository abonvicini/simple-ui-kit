import * as React from "react";
import type { SVGProps } from "react";
const FilePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 1.333h5.334l4 4v8A1.333 1.333 0 0112 14.668H4a1.333 1.333 0 01-1.333-1.333V2.667A1.333 1.333 0 014 1.334z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.333 1.333v4h4M8 12V8M6 10h4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FilePlus;
