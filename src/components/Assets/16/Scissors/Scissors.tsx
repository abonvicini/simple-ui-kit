import * as React from "react";
import type { SVGProps } from "react";
const Scissors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4zM13.333 2.667l-7.92 7.92M9.646 9.653l3.687 3.68M5.413 5.414L8 8"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Scissors;
