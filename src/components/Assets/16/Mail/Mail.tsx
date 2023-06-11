import * as React from "react";
import type { SVGProps } from "react";
const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 2.667H2.666c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h10.667c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.666 4L8 8.667 1.333 4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Mail;
