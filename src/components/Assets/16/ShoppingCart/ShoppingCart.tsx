import * as React from "react";
import type { SVGProps } from "react";
const ShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#ShoppingCart__clip0_37_4436)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 14.667a.667.667 0 100-1.333.667.667 0 000 1.333zM13.334 14.667a.667.667 0 100-1.333.667.667 0 000 1.333zM.667.667h2.667L5.12 9.593a1.333 1.333 0 001.334 1.073h6.48a1.333 1.333 0 001.333-1.073L15.334 4H4" />
    </g>
    <defs>
      <clipPath id="ShoppingCart__clip0_37_4436">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ShoppingCart;
