import * as React from "react";
import type { SVGProps } from "react";
const Inbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 12h-6l-2 3h-4l-2-3H2"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12l3.45-6.89A2 2 0 017.24 4h9.52a2 2 0 011.79 1.11L22 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Inbox;
