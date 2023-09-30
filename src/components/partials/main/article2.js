
function Article2({ title, imgSrc, onClick }) {

  return (
    <article  className="w-full  hover:brightness-75 flex flex-col items-center space-y-4 shadow-2xl p-2 "> 
      <button onClick={onClick} className="flex justify-center items-center" title={`Link to ${title}`}>
        <img src={imgSrc} alt={title} className="rounded h-80" />
      </button>
      <figcaption className="flex py-1.5">
            <button className="font-bold text-xl hover:underline border-black" >{title}</button>
      </figcaption>
    </article>
  );
}

export default Article2;
