import * as React from "react";
import type { SVGProps } from "react";
const Mic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Mic__clip0_37_4523)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.586 1.252A2 2 0 0110 2.667V8a2 2 0 11-4 0V2.667a2 2 0 01.586-1.415z" />
      <path d="M12.666 6.667V8a4.667 4.667 0 11-9.333 0V6.667M8 12.666v2.667M5.333 15.334h5.333" />
    </g>
    <defs>
      <clipPath id="Mic__clip0_37_4523">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Mic;
