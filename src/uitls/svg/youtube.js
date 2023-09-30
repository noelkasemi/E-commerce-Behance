import React from "react";

function YouTube({style}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${style} h-6 w-6 fill-current`}
    viewBox="0 0 48 48"
  >
    <path d="M48 24C48 10.744 37.256 0 24 0S0 10.744 0 24c0 11.981 8.775 21.91 20.25 23.71V30.936h-6.094V24h6.094v-5.288c0-6.014 3.581-9.337 9.066-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.029c-2.98 0-3.909 1.852-3.909 3.75V24h6.656l-1.064 6.938H27.75v16.771C39.225 45.91 48 35.981 48 24z"></path>
  </svg>
  );
}

export default YouTube;