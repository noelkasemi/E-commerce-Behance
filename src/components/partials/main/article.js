import Like from "../../../uitls/svg/Like";
import Arrow2 from "../../../uitls/svg/arrow2";

function Article({ imgSrc, title, price, style, description, imgStyle, discount = '', compare = '' , onClick, scrollToTheTop}) {

  const discount1 = '50%'
  const handleProductClick = () => {
    const selectedProduct = {
      imgSrc,
      title,
      price,
      description,
      compare,
      discount
    };
    onClick(selectedProduct); 
  };


  return (
    <article onClick={scrollToTheTop} className={`w-full ${style} p-2 flex  transition-transform ease-in-out bg-gray-100 flex-col items-center space-y-4 shadow-2xl h-fit`} > 
      <article  onClick={handleProductClick} className="w-full h-full  hover:brightness-75 bg-gray-100  ">
        <img src={imgSrc} title={`Link to ${title}`} alt={title} className={`w-full aspect-auto object-contain  px-6 h-[250px] ${imgStyle} cursor-pointer  rounded h-80 `} />
        </article>
      <figcaption className="flex flex-col items-center px-4 h-full justify-center w-full  ">
        <h2 className="w-full mb-3">
          <p className="font-semibold truncate text-center font-serif text-xl hover:underline h-fit">
            <button >{title}</button>
          </p>
          
          <p>{description}</p>
          <p className="line-through mt-4">{price}$</p>
            
            <p className="text-xl font-bold inline mr-8 ">{compare === '' ? ((price * 50) / 100).toFixed(2) : compare}$</p>
           
            <h3 className="bg-red-500 w-fit mt-1 h-fit text-white font-semibold px-2 p-1.5 rounded-lg">Save up to {discount === '' ? discount1 : discount}</h3>
            
           
         
        </h2>
        <h1 className="flex space-x-5  items-center w-full">
        <Arrow2 onClick={handleProductClick} />   
          <Like />  
        </h1>
      </figcaption>
    </article>
  );
}

export default Article;
