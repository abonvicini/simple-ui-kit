import * as React from "react";
import type { SVGProps } from "react";
const CreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#CreditCard__clip0_37_4379)"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2.667H2C1.264 2.667.667 3.263.667 4v8c0 .736.597 1.333 1.333 1.333h12c.737 0 1.334-.597 1.334-1.333V4c0-.737-.597-1.333-1.334-1.333zM.667 6.667h14.667" />
    </g>
    <defs>
      <clipPath id="CreditCard__clip0_37_4379">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CreditCard;
