import * as React from "react";
import type { SVGProps } from "react";
const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.667 2.667H4v10.666h2.667V2.666zM12 2.667H9.333v10.666H12V2.666z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Pause;
