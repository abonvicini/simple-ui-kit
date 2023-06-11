import * as React from "react";
import type { SVGProps } from "react";
const Columns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2h4.667A1.333 1.333 0 0114 3.333v9.334A1.334 1.334 0 0112.667 14H8M8 2v12M8 2H3.333A1.333 1.333 0 002 3.333v9.334A1.333 1.333 0 003.333 14H8"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Columns;
