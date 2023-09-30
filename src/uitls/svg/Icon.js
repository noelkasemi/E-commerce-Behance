function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "40"}
      height={props.height || "32"}
      viewBox="0 0 22 22"
      className={props.className || ""}
      fill={props.fill || "none"}
      stroke={props.stroke || "currentColor"}
      strokeWidth={props.strokeWidth || "2"}
    >
      <path d="M20 7.5h-5.5v-6a.5.5 0 00-.854-.353L1.654 13.136a.5.5 0 00.353.854h5.681a4.56 4.56 0 00.365 3.435 4.726 4.726 0 008.61-.425H20a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5zm-11.618 5H4.364L13 3.85V7.5h-1.5a.5.5 0 00-.5.5v2.672A4.749 4.749 0 008.382 12.5zm3.868 6.025a3.275 3.275 0 113.275-3.275 3.275 3.275 0 01-3.275 3.275z" />
    </svg>
  );
}

export default Icon;
