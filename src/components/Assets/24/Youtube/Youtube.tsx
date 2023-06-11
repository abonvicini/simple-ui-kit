import * as React from "react";
import type { SVGProps } from "react";
const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.838 5.16c.34.35.583.785.702 1.26.317 1.759.47 3.543.46 5.33a28.999 28.999 0 01-.46 5.25 2.78 2.78 0 01-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 01-1.94-1.92A29 29 0 011 11.75a29 29 0 01.46-5.29 2.78 2.78 0 011.94-2C5.12 4 12 4 12 4s6.88 0 8.6.42c.47.133.898.388 1.238.74z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 11.75l-5.75 3.27V8.48l5.75 3.27z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Youtube;
