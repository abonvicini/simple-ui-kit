import * as React from "react";
import type { SVGProps } from "react";
const BookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3H2v15h7a3 3 0 013 3V7a4 4 0 00-4-4zM16 3h6v15h-7a3 3 0 00-3 3V7a4 4 0 014-4z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BookOpen;
