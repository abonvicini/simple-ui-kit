import * as React from "react";
import type { SVGProps } from "react";
const Coffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 8h1a4 4 0 110 8h-1M18 8H2v9a4 4 0 004 4h8a4 4 0 004-4V8zM6 1v3M10 1v3M14 1v3"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Coffee;
