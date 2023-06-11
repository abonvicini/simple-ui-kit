import * as React from "react";
import type { SVGProps } from "react";
const Monitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 2H2.666c-.736 0-1.333.597-1.333 1.333V10c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V3.333c0-.736-.597-1.333-1.333-1.333zM5.333 14h5.333M8 11.334V14"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Monitor;
