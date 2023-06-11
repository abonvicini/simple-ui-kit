import * as React from "react";
import type { SVGProps } from "react";
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 11l4-9a3 3 0 013 3v4h5.66a2 2 0 012 2.3l-1.38 9a2 2 0 01-2 1.7H7m0-11v11m0-11H4a2 2 0 00-2 2v7a2 2 0 002 2h3"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ThumbsUp;
