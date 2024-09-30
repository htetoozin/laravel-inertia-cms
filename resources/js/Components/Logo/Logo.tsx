import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  //
}

export default function Logo(props: LogoProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="500" rx="250" fill="url(#paint0_linear)" />
      <path d="M184 165H95L181 251L95 337H184L270 251L184 165Z" fill="white" />
      <path
        d="M318.5 165H229.5L315.5 251L229.5 337H318.5L404.5 251L318.5 165Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="35"
          y1="377.5"
          x2="632.5"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#934EE7" />
          <stop offset="1" stopColor="#7270EC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
