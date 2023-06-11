import * as React from "react";
import type { SVGProps } from "react";
const Clipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.667 2.667H12A1.333 1.333 0 0113.334 4v9.333A1.333 1.333 0 0112 14.666H4a1.333 1.333 0 01-1.333-1.333V4A1.333 1.333 0 014 2.667h1.334"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 1.333H6A.667.667 0 005.333 2v1.333c0 .369.298.667.667.667h4a.667.667 0 00.666-.667V2A.667.667 0 0010 1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Clipboard;
