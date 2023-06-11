import * as React from "react";
import type { SVGProps } from "react";
const FileText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.333 1.333v4h4M10.666 8.666H5.333M10.666 11.334H5.333M6.666 6H5.333"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default FileText;
