import * as React from "react";
import type { SVGProps } from "react";
const Voicemail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM18.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5.5 16h13"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Voicemail;
