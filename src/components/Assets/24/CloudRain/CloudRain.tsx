import * as React from "react";
import type { SVGProps } from "react";
const CloudRain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#CloudRain__clip0_18_877)"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 13v8M8 13v8M12 15v8M20.006 16.58a5 5 0 00-2-9.58h-1.26a8 8 0 10-12.74 8.25" />
    </g>
    <defs>
      <clipPath id="CloudRain__clip0_18_877">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CloudRain;
