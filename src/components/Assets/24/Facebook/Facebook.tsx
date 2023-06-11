import * as React from "react";
import type { SVGProps } from "react";
const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 2h3v4h-3a1 1 0 00-1 1v3h4l-1 4h-3v8h-4v-8H7v-4h3V7a5 5 0 015-5z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Facebook;
