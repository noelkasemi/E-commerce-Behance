import { useState } from "react";

function Like() {
  const [isClicked, setIsClicked] = useState(true);
  const [count, setCount] = useState(400);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setCount(isClicked ? count + 1 : count - 1);
  };
  return (
    <section className="flex items-center">
    <button onClick={handleClick} className={`hover:scale-125 ${!isClicked ? 'scale-110' : 'scale-100'} transition-transform `}>
    <svg xmlns="http://www.w3.org/2000/svg" fill={!isClicked ? 'pink' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

      </button>
      <p className="mr-2 ml-1 text-lg mb-1 font-semibold	"> {count}</p>
    </section>
  );
}

export default Like;
