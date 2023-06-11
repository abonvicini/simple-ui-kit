import * as React from "react";
import type { SVGProps } from "react";
const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.667 2.667H3.333C2.597 2.667 2 3.263 2 4v9.333c0 .737.597 1.333 1.333 1.333h9.334c.736 0 1.333-.596 1.333-1.333V4c0-.737-.597-1.333-1.333-1.333zM10.667 1.333V4M5.333 1.333V4M2 6.667h12"
      stroke="#2A2E34"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Calendar;
