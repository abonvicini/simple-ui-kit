import * as React from "react";
import type { SVGProps } from "react";
const Anchor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 8a3 3 0 100-6 3 3 0 000 6zM12 22V8M5 12H2a10 10 0 0020 0h-3"
      stroke="#2A2E34"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Anchor;
