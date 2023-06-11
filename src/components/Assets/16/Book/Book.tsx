import * as React from "react";
import type { SVGProps } from "react";
const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.667 13a1.666 1.666 0 011.667-1.666h9"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.334 1.333h-9A1.667 1.667 0 002.667 3v10a1.667 1.667 0 001.667 1.667h9V1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Book;
