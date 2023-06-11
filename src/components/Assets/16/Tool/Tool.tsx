import * as React from "react";
import type { SVGProps } from "react";
const Tool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.61 4.667c0-.175.068-.342.19-.467l.007-.007 2.506-2.506A4 4 0 007.02 6.98l-4.607 4.607a1.414 1.414 0 102 2L9.02 8.98a4 4 0 005.293-5.293L11.8 6.2a.667.667 0 01-.933 0L9.8 5.133a.667.667 0 01-.19-.466z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tool;
