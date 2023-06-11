import * as React from "react";
import type { SVGProps } from "react";
const MousePointer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.07 19.97L3 3l16.97 7.07-7.39 2.51-2.51 7.39zM13 13l6 6"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MousePointer;
