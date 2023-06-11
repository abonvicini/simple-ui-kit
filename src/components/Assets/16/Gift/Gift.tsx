import * as React from "react";
import type { SVGProps } from "react";
const Gift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Gift__clip0_37_4342)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.334 8v6.667H2.667V8M14.666 4.667H1.333V8h13.333V4.667zM8 14.666v-10" />
      <path d="M5 4.667h3s-.667-3.333-3-3.333a1.667 1.667 0 100 3.333zM11 4.667H8s.667-3.333 3-3.333a1.667 1.667 0 110 3.333z" />
    </g>
    <defs>
      <clipPath id="Gift__clip0_37_4342">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Gift;
