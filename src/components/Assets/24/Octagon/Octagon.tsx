import * as React from "react";
import type { SVGProps } from "react";
const Octagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.14 2H7.86L2 7.86v8.28L7.86 22h8.28L22 16.14V7.86L16.14 2z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Octagon;
