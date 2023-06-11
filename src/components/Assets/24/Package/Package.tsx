import * as React from "react";
import type { SVGProps } from "react";
const Package = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 9.4l-9-5.19M21 8v8a2 2 0 01-1 1.73l-7 4a2 2 0 01-2 0l-7-4A2 2 0 013 16V8a2 2 0 011-1.73l7-4a2 2 0 012 0l7 4A2 2 0 0121 8z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Package;
