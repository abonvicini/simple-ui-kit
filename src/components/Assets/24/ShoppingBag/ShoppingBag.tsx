import * as React from "react";
import type { SVGProps } from "react";
const ShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 6l3-4h12l3 4v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM3 6h18M16 10a4 4 0 11-8 0"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ShoppingBag;
