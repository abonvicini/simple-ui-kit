import * as React from "react";
import type { SVGProps } from "react";
const Twitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.333 7.333V4.668m3.334 2.667V4.667M14 1.334H2V12h3.333v2.667L8 12h3.333L14 9.334v-8z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Twitch;
