import type { SVGProps } from "react";
const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className=""
    {...props}
  >
    <rect
      id="r9"
      width="512"
      height="512"
      x="0"
      y="0"
      rx="128"
      fill="url(#ra)"
      stroke="#FFFFFF"
      strokeWidth="0"
      strokeOpacity="100%"
      paintOrder="stroke"
    ></rect>
    <clipPath id="clip">
      <use xlinkHref="#r9"></use>
    </clipPath>
    <defs>
      <radialGradient
        id="ra"
        cx="50%"
        cy="50%"
        r="100%"
        fx="50%"
        fy="0%"
        gradientUnits="objectBoundingBox"
      >
        <stop stopColor="#a855f7"></stop>
        <stop offset="1" stopColor="#a855f7"></stop>
      </radialGradient>
      <radialGradient
        id="rb"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(256) rotate(90) scale(512)"
      >
        <stop stopColor="white"></stop>
        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="352"
      height="352"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-settings"
      x="80"
      y="80"
      alignmentBaseline="middle"
      style={{ color: "white" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"></path>
    </svg>
  </svg>
);
export default SettingsIcon;
