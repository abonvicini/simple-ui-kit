import * as React from "react";
import type { SVGProps } from "react";
const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Sun__clip0_37_4417)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 11.333a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM8 .667V2M8 14v1.333M2.813 2.813l.947.947M12.24 12.24l.947.947M.667 8H2M14 8h1.333M2.813 13.187l.947-.947M12.24 3.76l.947-.947" />
    </g>
    <defs>
      <clipPath id="Sun__clip0_37_4417">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Sun;
