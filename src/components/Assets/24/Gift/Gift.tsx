import * as React from "react";
import type { SVGProps } from "react";
const Gift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M7.5 7H12s-1-5-4.5-5a2.5 2.5 0 100 5zM16.5 7H12s1-5 4.5-5a2.5 2.5 0 010 5z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Gift;
