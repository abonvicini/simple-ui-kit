import * as React from "react";
import type { SVGProps } from "react";
const Move = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Move__clip0_37_4390)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.333 6l-2 2 2 2M6 3.333l2-2 2 2M10 12.666l-2 2-2-2M12.667 6l2 2-2 2M1.333 8h13.333M8 1.333v13.334" />
    </g>
    <defs>
      <clipPath id="Move__clip0_37_4390">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Move;
