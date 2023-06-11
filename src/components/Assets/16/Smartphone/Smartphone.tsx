import * as React from "react";
import type { SVGProps } from "react";
const Smartphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.333 1.333H4.666c-.736 0-1.333.597-1.333 1.334v10.666c0 .737.597 1.334 1.333 1.334h6.667c.736 0 1.333-.597 1.333-1.333V2.667c0-.737-.597-1.333-1.333-1.333zM8 12h.007"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Smartphone;
