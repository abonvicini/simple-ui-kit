import * as React from "react";
import type { SVGProps } from "react";
const MessageSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.61 10.943c.25-.25.39-.59.39-.943V3.333A1.334 1.334 0 0012.667 2H3.333A1.333 1.333 0 002 3.333V14l2.667-2.667h8c.353 0 .692-.14.943-.39z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MessageSquare;
