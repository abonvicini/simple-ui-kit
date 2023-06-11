import * as React from "react";
import type { SVGProps } from "react";
const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.668v4.667c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V8.667c0-.737-.597-1.333-1.333-1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.667 7.333V4.668a3.333 3.333 0 116.667 0v2.667"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Lock;
