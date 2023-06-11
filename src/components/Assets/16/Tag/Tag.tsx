import * as React from "react";
import type { SVGProps } from "react";
const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.946 13.72l4.78-4.78a1.333 1.333 0 000-1.88L8 1.334H1.333V8l5.727 5.72a1.335 1.335 0 001.886 0zM4.667 4.667h.007"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tag;
