import * as React from "react";
import type { SVGProps } from "react";
const Film = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Film__clip0_37_4335)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.213 1.333H2.786c-.802 0-1.453.651-1.453 1.454v10.427c0 .802.65 1.453 1.453 1.453h10.427c.803 0 1.453-.65 1.453-1.454V2.787c0-.803-.65-1.454-1.453-1.454zM4.667 1.333v13.334M11.333 1.333v13.334M1.333 8h13.333M1.333 4.667h3.333M1.333 11.334h3.333M11.333 11.334h3.333M11.333 4.667h3.333" />
    </g>
    <defs>
      <clipPath id="Film__clip0_37_4335">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Film;
