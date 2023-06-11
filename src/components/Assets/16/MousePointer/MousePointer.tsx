import * as React from "react";
import type { SVGProps } from "react";
const MousePointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.713 13.313L2 2l11.313 4.713-4.926 1.674-1.674 4.926zM8.667 8.666l4 4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MousePointer;
