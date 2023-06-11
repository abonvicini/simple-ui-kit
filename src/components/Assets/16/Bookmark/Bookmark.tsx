import * as React from "react";
import type { SVGProps } from "react";
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 10.667L12.666 14V3.333A1.333 1.333 0 0011.333 2H4.666a1.333 1.333 0 00-1.333 1.333V14L8 10.667z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bookmark;
