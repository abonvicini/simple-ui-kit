import * as React from "react";
import type { SVGProps } from "react";
const MessageCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.4 10.2a5.587 5.587 0 00.6-2.533v-.334A5.654 5.654 0 008.667 2h-.334a5.587 5.587 0 00-2.533.6 5.667 5.667 0 00-3.133 5.067c-.003.88.203 1.748.6 2.533L2 14l3.8-1.267a5.588 5.588 0 002.533.6A5.667 5.667 0 0013.4 10.2z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MessageCircle;
