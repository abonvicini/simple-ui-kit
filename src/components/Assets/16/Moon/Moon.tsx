import * as React from "react";
import type { SVGProps } from "react";
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.772 11.645A6 6 0 0014 8.527 4.667 4.667 0 017.473 2a6 6 0 105.3 9.645z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Moon;
