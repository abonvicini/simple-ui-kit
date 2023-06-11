import * as React from "react";
import type { SVGProps } from "react";
const Radio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 9.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM10.827 5.173a4 4 0 010 5.66m-5.653-.006a4 4 0 010-5.66m7.54-1.88a6.667 6.667 0 010 9.426m-9.427 0a6.667 6.667 0 010-9.426"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Radio;
