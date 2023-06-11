import * as React from "react";
import type { SVGProps } from "react";
const Camera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.414 20.414A2 2 0 0023 19V8a2 2 0 00-2-2h-4l-2-3H9L7 6H3a2 2 0 00-2 2v11a2 2 0 002 2h18a2 2 0 001.414-.586z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17a4 4 0 100-8 4 4 0 000 8z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Camera;
