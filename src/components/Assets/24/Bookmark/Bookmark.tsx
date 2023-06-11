import * as React from "react";
import type { SVGProps } from "react";
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16l7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-5z"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Bookmark;
