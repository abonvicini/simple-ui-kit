import * as React from "react";
import type { SVGProps } from "react";
const Map = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 22V6l7-4 8 4 7-4v16l-7 4-8-4-7 4zM8 2v16M16 6v16"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Map;
