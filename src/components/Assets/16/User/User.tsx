import * as React from "react";
import type { SVGProps } from "react";
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.334 14v-1.333A2.667 2.667 0 0010.667 10H5.334a2.667 2.667 0 00-2.667 2.667V14M8 7.333A2.667 2.667 0 108 2a2.667 2.667 0 000 5.333z"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default User;
