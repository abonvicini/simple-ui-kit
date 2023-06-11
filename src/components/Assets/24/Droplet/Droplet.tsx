import * as React from "react";
import type { SVGProps } from "react";
const Droplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.66 8.35L12 2.69 6.35 8.35a8 8 0 1011.31 0z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Droplet;
