import * as React from "react";
import type { SVGProps } from "react";
const MicOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#MicOff__clip0_37_4380)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M.667.667l14.667 14.666M6 6v2a2 2 0 003.413 1.413M10 6.227v-3.56a2 2 0 00-3.96-.4" />
      <path d="M11.333 11.274a4.692 4.692 0 01-5.113 1.042 4.66 4.66 0 01-2.108-1.723 4.621 4.621 0 01-.779-2.6V6.665m9.333 0v1.326c0 .274-.024.547-.073.816M8 12.666v2.667M5.333 15.334h5.333" />
    </g>
    <defs>
      <clipPath id="MicOff__clip0_37_4380">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MicOff;
