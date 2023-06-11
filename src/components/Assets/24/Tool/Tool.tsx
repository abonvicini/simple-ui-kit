import * as React from "react";
import type { SVGProps } from "react";
const Tool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.414 7a1 1 0 01.286-.7l.01-.01 3.76-3.76a6 6 0 00-7.94 7.94l-6.91 6.91a2.121 2.121 0 103 3l6.91-6.91a6 6 0 007.94-7.94L17.7 9.3a1 1 0 01-1.4 0l-1.6-1.6a1 1 0 01-.286-.7z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tool;
