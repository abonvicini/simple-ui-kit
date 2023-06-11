import * as React from "react";
import type { SVGProps } from "react";
const Columns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18v18m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Columns;
