import * as React from "react";
import type { SVGProps } from "react";
const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.828 2.505A4 4 0 0112 5.334c0 4.666 2 6 2 6H2s2-1.334 2-6a4 4 0 016.828-2.829zM9.153 14a1.333 1.333 0 01-2.306 0"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bell;
