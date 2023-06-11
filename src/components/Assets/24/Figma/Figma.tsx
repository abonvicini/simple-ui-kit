import * as React from "react";
import type { SVGProps } from "react";
const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.025 3.025A3.5 3.5 0 008.5 9H12V2H8.5a3.5 3.5 0 00-2.475 1.025zM15.5 2H12v7h3.5a3.5 3.5 0 100-7z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.266 11.16a3.5 3.5 0 106.467 2.68 3.5 3.5 0 00-6.467-2.68zM6.025 17.025A3.5 3.5 0 1012 19.5V16H8.5a3.5 3.5 0 00-2.475 1.025z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.025 10.025A3.5 3.5 0 008.5 16H12V9H8.5a3.5 3.5 0 00-2.475 1.025z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Figma;
