import * as React from "react";
import type { SVGProps } from "react";
const MessageSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.414 16.414A2 2 0 0021 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16l4-4h12a2 2 0 001.414-.586z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MessageSquare;
