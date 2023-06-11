import * as React from "react";
import type { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.703 2.278a3.666 3.666 0 011.19 5.982l-.707.707L8 14.154 2.813 8.967l-.707-.707a3.668 3.668 0 015.187-5.186L8 3.78l.706-.706a3.667 3.667 0 013.997-.796z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Heart;
