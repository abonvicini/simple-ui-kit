import * as React from "react";
import type { SVGProps } from "react";
const PieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.21 15.89A10 10 0 118 2.83M21.239 8.173A10 10 0 0122 12H12V2a10 10 0 019.239 6.173z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default PieChart;
