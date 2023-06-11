import * as React from "react";
import type { SVGProps } from "react";
const Inbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.666 8h-4l-1.333 2H6.666L5.333 8h-4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.333 8l2.3-4.593a1.333 1.333 0 011.193-.74h6.347a1.333 1.333 0 011.193.74L14.666 8v4a1.333 1.333 0 01-1.333 1.333H2.666A1.333 1.333 0 011.333 12V8z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Inbox;
