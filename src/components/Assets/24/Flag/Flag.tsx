import * as React from "react";
import type { SVGProps } from "react";
const Flag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 14c-3 0-4 1-4 1V3s1-1 4-1 5 2 8 2 4-1 4-1v12s-1 1-4 1-5-2-8-2zM4 22v-7"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Flag;
