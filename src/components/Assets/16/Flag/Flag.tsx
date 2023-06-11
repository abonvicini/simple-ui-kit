import * as React from "react";
import type { SVGProps } from "react";
const Flag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.334 9.334c-2 0-2.667.666-2.667.666V2s.667-.667 2.667-.667c2 0 3.333 1.334 5.333 1.334S13.334 2 13.334 2v8s-.667.667-2.667.667c-2 0-3.333-1.333-5.333-1.333zM2.667 14.667V10"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Flag;
