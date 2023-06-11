import * as React from "react";
import type { SVGProps } from "react";
const Printer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Printer__clip0_37_4402)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6V1.333h8V6M4 12H2.666a1.334 1.334 0 01-1.333-1.333V7.333A1.333 1.333 0 012.666 6h10.667a1.333 1.333 0 011.333 1.333v3.334A1.333 1.333 0 0113.333 12H12" />
      <path d="M12 9.334H4v5.333h8V9.334z" />
    </g>
    <defs>
      <clipPath id="Printer__clip0_37_4402">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Printer;
