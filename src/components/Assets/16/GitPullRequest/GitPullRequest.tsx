import * as React from "react";
import type { SVGProps } from "react";
const GitPullRequest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 14a2 2 0 100-4 2 2 0 000 4zM4 6a2 2 0 100-4 2 2 0 000 4zM8.667 4h2A1.333 1.333 0 0112 5.333V10M4 6v8"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GitPullRequest;
