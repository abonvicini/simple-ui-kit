import * as React from "react";
import type { SVGProps } from "react";
const Briefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 4.667H2.666c-.736 0-1.333.596-1.333 1.333v6.666c0 .737.597 1.334 1.333 1.334h10.667c.736 0 1.333-.597 1.333-1.334V6c0-.737-.597-1.333-1.333-1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.666 14V3.333A1.333 1.333 0 009.333 2H6.666a1.333 1.333 0 00-1.333 1.333V14"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Briefcase;
