import Article from "../main/article";


function ProductList2({ data, error, category, selectedOrder, onOrderChange, onProductSelect}) {
  
const filteredData = data.filter((item) => item.category === category);
const customTextShadow = `
  1px 1px 0 black,
  1px 2px 0 black,
  1px 3px 0 black,
  1px 4px 0 black,
  1px 5px 0 black,
  1px 6px 0 black,
  1px 7px 0 black,
  1px 8px 0 black,
  5px 13px 15px black,
  5px 13px 25px #0a0a0a
`;
const textStyle = {
  textShadow: customTextShadow,
};



  return (
    <main className="mt-12">
     <p style={textStyle} className="text-4xl relative ml-4 sm:ml-0 mb-12 sm:mb-0 top-8 text-shadow sm:top-12 font-bold text-white text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</p> 
    <section className="flex mt-4 flex-col w-full items-end">
          <button href="#" className="w-[130px] mr-4 mb-1 flex items-start">
            <p className="text-gray-400 font-semibold w-5/12 pl-3 text-xs">
              Sort
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={14}
              className="w-7/12 pr-16"
              viewBox="0 0 24 24"
            >
              <polygon points="12,18 6,6 18,6" fill="gray" />
            </svg>
          </button>
          
          <select value={selectedOrder} onChange={(e) => onOrderChange(e.target.value)} className='border rounded-lg mr-4 bg-gray-100 text-gray-400 focus:outline-none focus:ring focus:border-blue-500'>
  <option key={'recommeded'} value='Recommended'>Recommended</option>
  <option key={'ascending'} value='Ascending' >Ascending</option>
  <option key={'descending'} value='Descending'>Descending</option>
</select>

         
        </section>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 pt-4 sm:pt-6 xs:px-12 px-6">
       
      {error ? (
        <p>{error}</p>
      ) : (
      filteredData.map((item) => (
          <Article onClick={() => onProductSelect(item)} key={item.id} style={`hover:scale-110`} imgSrc={item.image} price={item.price} title={item.title} />
        ))
      )}
    </section>
    </main>
  );
}

export default ProductList2;
