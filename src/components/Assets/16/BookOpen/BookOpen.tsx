import * as React from "react";
import type { SVGProps } from "react";
const BookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.333 2h-4v10H6a2 2 0 012 2V4.667A2.667 2.667 0 005.333 2zM10.667 2h4v10H10a2 2 0 00-2 2V4.667A2.667 2.667 0 0110.667 2z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BookOpen;
