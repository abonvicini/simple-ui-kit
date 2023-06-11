import * as React from "react";
import type { SVGProps } from "react";
const ShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 4l2-2.667h8L14 4v9.334a1.333 1.333 0 01-1.333 1.333H3.333A1.333 1.333 0 012 13.334V4zM2 4h12M10.666 6.667a2.667 2.667 0 11-5.333 0"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ShoppingBag;
