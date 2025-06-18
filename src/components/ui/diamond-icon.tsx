import React from "react";

export const DiamondIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#cfc09f" />
        <stop offset="40%" stopColor="#ffecb3" />
        <stop offset="78%" stopColor="#3a2c0f" />
      </linearGradient>
    </defs>
    <g id="diamond">
      <path d="M64 125.4 10.9 94.7V33.3L64 2.6l53.1 30.7v61.4z" fill="url(#gold-gradient)" />
      <path d="M64 101.6 31.5 82.8V45.2L64 26.4l32.5 18.8v37.6z" fill="url(#gold-gradient)" />
      <path d="M64 128 8.6 96V32L64 0l55.4 32v64L64 128zM15.5 94.7l46.2 26.7v-18.5L31.5 85.4l-16 9.3zm50.8 8.2v18.5l46.7-27-15.9-9.3-30.8 17.8zM33.8 81.5 64 98.9l30.2-17.5V46.5L64 29.1 33.8 46.5v35zM13.2 37.9v52.9l16-9.3V46.9l-16-9zm85.6 42.9 16 9.4v-53l-16 9v34.6zM14.9 33.6l16.2 9.1 30.6-17.6V6.6l-46.8 27zm51.4-8.5 30 17.3 16.2-9.1L66.3 6.6v18.5z" fill="url(#gold-gradient)" />
    </g>
  </svg>
);
