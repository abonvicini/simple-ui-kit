import * as React from "react";
import type { SVGProps } from "react";
const Percent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.666 3.333l-9.333 9.334M4.334 6a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334zM11.667 13.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Percent;
