import * as React from "react";
import type { SVGProps } from "react";
const Database = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 5.333c3.314 0 6-.895 6-2 0-1.104-2.686-2-6-2s-6 .896-6 2c0 1.105 2.686 2 6 2zM14 8c0 1.107-2.667 2-6 2s-6-.893-6-2"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 3.333v9.334c0 1.107 2.667 2 6 2s6-.893 6-2V3.333"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Database;
