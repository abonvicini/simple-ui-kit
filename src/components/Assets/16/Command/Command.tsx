import * as React from "react";
import type { SVGProps } from "react";
const Command = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a2 2 0 00-2 2v8a2 2 0 102-2H4a2 2 0 102 2V4a2 2 0 10-2 2h8a2 2 0 000-4z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Command;
