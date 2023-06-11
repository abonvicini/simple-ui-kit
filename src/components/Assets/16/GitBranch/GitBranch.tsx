import * as React from "react";
import type { SVGProps } from "react";
const GitBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 2v8M12 6a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4zM12 6a6 6 0 01-6 6"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GitBranch;
