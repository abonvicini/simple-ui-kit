import * as React from "react";
import type { SVGProps } from "react";
const Folder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.276 13.61c.25-.25.39-.59.39-.943V5.333A1.333 1.333 0 0013.333 4h-6L6 2H2.666a1.333 1.333 0 00-1.333 1.333v9.334A1.333 1.333 0 002.666 14h10.667c.354 0 .693-.14.943-.39z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Folder;
