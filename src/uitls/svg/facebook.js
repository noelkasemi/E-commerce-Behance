import React from "react";

function Facebook({style}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} h-6 w-6 fill-current`}
      viewBox="0 0 48 48"
    >
      <path
        fillRule="evenodd"
        d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm10.002 15.75a3.248 3.248 0 012.263 2.323c.535 2.05.535 6.327.535 6.327s0 4.277-.535 6.327a3.253 3.253 0 01-2.263 2.324C32.005 33.6 24 33.6 24 33.6s-8.005 0-10.002-.55a3.248 3.248 0 01-2.263-2.323C11.2 28.677 11.2 24.4 11.2 24.4s0-4.277.535-6.327a3.253 3.253 0 012.263-2.324C15.995 15.2 24 15.2 24 15.2s8.005 0 10.002.55z"
        clipRule="evenodd"
      ></path>
      <path d="M21.6 28.8v-8l6.4 4-6.4 4z"></path>
    </svg>
  );
}

export default Facebook;
