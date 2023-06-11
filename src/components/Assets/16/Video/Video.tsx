import * as React from "react";
import type { SVGProps } from "react";
const Video = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#Video__clip0_37_4358)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.667 8l4.667-3.333v6.666L10.667 8zM9.334 3.333H2c-.736 0-1.333.597-1.333 1.334v6.667c0 .736.597 1.333 1.333 1.333h7.334c.736 0 1.333-.597 1.333-1.333V4.667c0-.737-.597-1.333-1.333-1.333z" />
    </g>
    <defs>
      <clipPath id="Video__clip0_37_4358">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Video;
