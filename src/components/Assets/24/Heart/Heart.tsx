import * as React from "react";
import type { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.055 3.417a5.5 5.5 0 012.978 7.188 5.5 5.5 0 01-1.193 1.785l-1.06 1.06L12 21.23l-7.78-7.78-1.06-1.06a5.501 5.501 0 017.78-7.78L12 5.67l1.06-1.06a5.5 5.5 0 015.995-1.193z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Heart;
