import * as React from "react";
import type { SVGProps } from "react";
const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.243 3.757A6 6 0 0118 8c0 7 3 9 3 9H3s3-2 3-9a6 6 0 0110.243-4.243zM13.73 21a1.999 1.999 0 01-3.46 0"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bell;
