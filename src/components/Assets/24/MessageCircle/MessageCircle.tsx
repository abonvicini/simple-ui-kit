import * as React from "react";
import type { SVGProps } from "react";
const MessageCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.1 15.3a8.38 8.38 0 00.9-3.8V11a8.48 8.48 0 00-8-8h-.5a8.38 8.38 0 00-3.8.9A8.5 8.5 0 004 11.5a8.38 8.38 0 00.9 3.8L3 21l5.7-1.9a8.379 8.379 0 003.8.9 8.5 8.5 0 007.6-4.7z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MessageCircle;
