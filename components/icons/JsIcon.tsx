import React from "react";

const JsIcon = ({ className = "" }) => {
  return (
    <div>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2">
          <path d="m20 4l-2 14.5l-6 2l-6-2L4 4z" />
          <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" />
        </g>
      </svg>
    </div>
  );
};

export default JsIcon;
