import * as React from "react";
import type { SVGProps } from "react";
const Delete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 4h13a2 2 0 012 2v12a2 2 0 01-2 2H8l-7-8 7-8zM18 9l-6 6M12 9l6 6"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Delete;
