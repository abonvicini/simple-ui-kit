import * as React from "react";
import type { SVGProps } from "react";
const Shuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.667 2H14v3.333M2.667 13.333L14 2M14 10.666V14h-3.333M10 10l4 4M2.667 2.667L6 6"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Shuffle;
