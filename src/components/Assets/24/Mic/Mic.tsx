import * as React from "react";
import type { SVGProps } from "react";
const Mic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.879 1.879A3 3 0 0115 4v8a3 3 0 01-6 0V4a3 3 0 01.879-2.121z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 10v2a7 7 0 11-14 0v-2M12 19v4M8 23h8"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Mic;
