import * as React from "react";
import type { SVGProps } from "react";
const Feather = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.998 7.995c0 1.592-.632 3.12-1.758 4.245L13.5 19H5v-8.5l6.75-6.75a6.003 6.003 0 0110.248 4.245zM16 8L2 22M17.5 15H9"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Feather;
