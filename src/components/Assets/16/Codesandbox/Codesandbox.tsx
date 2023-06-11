import * as React from "react";
import type { SVGProps } from "react";
const Codesandbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 5.333v5.333a1.333 1.333 0 01-.667 1.154l-4.666 2.666a1.333 1.333 0 01-1.334 0L2.667 11.82A1.333 1.333 0 012 10.666V5.333a1.333 1.333 0 01.667-1.153l4.666-2.667a1.333 1.333 0 011.334 0l4.666 2.667A1.333 1.333 0 0114 5.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 2.807L8 4.54l3-1.733M5 13.193v-3.46L2 8M14 8l-3 1.733v3.46M2.18 4.64L8 8.007l5.82-3.367M8 14.72V8"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Codesandbox;
