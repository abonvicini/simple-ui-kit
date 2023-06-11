import * as React from "react";
import type { SVGProps } from "react";
const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.06 5.507L8 1.334 5.94 5.506l-4.607.673 3.333 3.247-.786 4.587L8 11.847l4.12 2.167-.787-4.587 3.333-3.247-4.606-.673z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Star;
