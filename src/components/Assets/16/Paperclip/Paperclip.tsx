import * as React from "react";
import type { SVGProps } from "react";
const Paperclip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.293 7.367l-6.127 6.126a4.002 4.002 0 11-5.66-5.66l6.127-6.126a2.668 2.668 0 113.773 3.773l-6.133 6.127A1.334 1.334 0 014.386 9.72l5.66-5.653"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Paperclip;
