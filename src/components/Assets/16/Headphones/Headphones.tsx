import * as React from "react";
import type { SVGProps } from "react";
const Headphones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 12V8a6 6 0 1112 0v4"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.61 13.61c.25-.25.39-.59.39-.943V9.334h-2a1.333 1.333 0 00-1.333 1.333v2A1.333 1.333 0 0012 14h.667c.353 0 .692-.14.943-.39zM2.39 13.61c-.25-.25-.39-.59-.39-.943V9.334h2a1.333 1.333 0 011.333 1.333v2A1.333 1.333 0 014 14h-.667c-.353 0-.692-.14-.942-.39z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Headphones;
