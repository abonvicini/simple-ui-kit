import * as React from "react";
import type { SVGProps } from "react";
const GitCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16a4 4 0 100-8 4 4 0 000 8zM1.05 12H7M17.01 12h5.95"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GitCommit;
