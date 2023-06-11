import * as React from "react";
import type { SVGProps } from "react";
const PieChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#PieChart__clip0_37_4469)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.14 10.593a6.666 6.666 0 11-8.807-8.706M14.16 5.449c.334.809.507 1.676.507 2.551H8V1.333a6.666 6.666 0 016.16 4.116z" />
    </g>
    <defs>
      <clipPath id="PieChart__clip0_37_4469">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PieChart;
