import * as React from "react";
import type { SVGProps } from "react";
const Speaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1.333H4c-.736 0-1.333.597-1.333 1.334v10.666c0 .737.597 1.334 1.333 1.334h8c.737 0 1.334-.597 1.334-1.333V2.667c0-.737-.597-1.333-1.334-1.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12a2.667 2.667 0 100-5.333A2.667 2.667 0 008 12zM8 4h.007"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Speaker;
