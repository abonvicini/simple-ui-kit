import * as React from "react";
import type { SVGProps } from "react";
const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.42 20.58l7.17-7.17a2 2 0 000-2.82L12 2H2v10l8.59 8.58a1.998 1.998 0 002.83 0zM7 7h.01"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tag;
