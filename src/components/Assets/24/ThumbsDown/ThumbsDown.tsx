import * as React from "react";
import type { SVGProps } from "react";
const ThumbsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 13l-4 9a3 3 0 01-3-3v-4H4.34a2 2 0 01-2-2.3l1.38-9a2 2 0 012-1.7H17m0 11V2m0 11h2.67A2.31 2.31 0 0022 11V4a2.31 2.31 0 00-2.33-2H17"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ThumbsDown;
