import * as React from "react";
import type { SVGProps } from "react";
const ChevronsLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.333 11.333L4 8l3.333-3.333M12 11.333L8.667 8 12 4.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronsLeft;
