import * as React from "react";
import type { SVGProps } from "react";
const Maximize2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2h4v4M6 14H2v-4M14 2L9.333 6.667M2 14l4.667-4.666"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Maximize2;
