import * as React from "react";
import type { SVGProps } from "react";
const Cpu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Cpu__clip0_37_4318)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.667H4c-.736 0-1.333.596-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h8c.737 0 1.334-.597 1.334-1.333V4c0-.737-.597-1.333-1.334-1.333z" />
      <path d="M10 6H6v4h4V6zM6 .667v2M10 .667v2M6 13.334v2M10 13.334v2M13.333 6h2M13.333 9.334h2M.667 6h2M.667 9.334h2" />
    </g>
    <defs>
      <clipPath id="Cpu__clip0_37_4318">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Cpu;
