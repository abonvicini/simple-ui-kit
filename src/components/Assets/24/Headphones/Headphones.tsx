import * as React from "react";
import type { SVGProps } from "react";
const Headphones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 18v-6a9 9 0 1118 0v6"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.414 20.414A2 2 0 0021 19v-5h-3a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 001.414-.586zM3.586 20.414A2 2 0 013 19v-5h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-1.414-.586z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Headphones;
