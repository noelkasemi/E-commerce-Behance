// SingleItemPage.js
import Arrow from '../uitls/svg/arrow'
import Star from '../uitls/svg/star'
import People from '../uitls/svg/people';
import Article from '../components/partials/main/article';
import { useState, useEffect } from 'react';


function SingleItemPage({ selectedProduct, onClose, onSelectRecommendedProduct, onAddToCart }) {
  const { title, price, description, compare, discount, category } = selectedProduct;
  const [recommendedProducts, setRecommendedProducts] = useState([]); // State for recommended products

  const handleAddToCart = () => {
   onAddToCart(selectedProduct)
  }

  useEffect(() => {
    // Fetch recommended products based on the category of the selected product
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter products with matching category
        const filteredRecommendations = data.filter((product) => product.category === category && product.id !== selectedProduct.id);

        // Calculate compare and discount for recommended products
        const recommendedProductsWithInfo = filteredRecommendations.map((product) => ({
          ...product,
          compare: ((product.price * 50) / 100).toFixed(2),
          discount: "50%", 
        }));

        setRecommendedProducts(recommendedProductsWithInfo);
      })
      .catch((error) => {
        console.error("Error fetching recommended products:", error);
      });
  }, [selectedProduct, category]); 
  
  function handleRecommendedProductClick(product) {
    onSelectRecommendedProduct(product);
  }
  const scrollToTheTop = () => {
    window.scrollTo(0, 0);
  };
  


  return (<section className="flex flex-col items-center relative px-4 sm:px-8 top-16 sm:top-24">
    <button className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800' onClick={onClose}>
        <span className='flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 items-center'>
       <Arrow />
        Go Back
        </span>
        </button>
    <section className="md:flex md:space-x-8 justify-center  md:pl-12 ">
        <article className="border shadow-lg h-fit p-8 w-full lg:w-3/5 flex items-center justify-center">
            <img className="w-full object-contain h-[300px] " src={selectedProduct.image} alt={title} />
            </article>
            
        <article className="w-full m-0 space-y-4 md:items-start flex flex-col ">
         
      <h3 className=' text-4xl  font-bold'> {title}</h3>
      <h1 className='flex' >
        <h2 className=''>
      <p className='text-2xl line-through font-semibold'> {price}$</p>
      <p className="text-4xl font-bold mr-8 block ">{compare}$</p>
      </h2>
           
           <h3 className="bg-red-500 w-fit mt-4 h-fit text-white font-semibold px-2 p-1.5 rounded-lg">Save up to {discount}</h3>
           </h1>
      <p className='text-xl w-fit lg:w-2/3'> {description}</p>
      <section className='flex items-center'>
      <h1 className=''>
        <h2 className='flex items-center'>
        <Star style={``}  fill='yellow'/>
      <p className='text-xl font-semibold'>{selectedProduct.rating.rate}/5</p>
      </h2>
      <p className='flex text-lg font-semibold items-center'><People style={`mr-2`} /> {selectedProduct.rating.count}</p>
         </h1>
         
         <p className='font-semibold ml-16 text-2xl'>Category: </p>
        <p className='font-semibold mt-2 text-lg text-blue-400 ml-2'> {selectedProduct.category}</p>
      
         </section>
         <button onClick={handleAddToCart} className='px-7 py-3 self-center rounded bg-purple-300 text-purple-800 hover:border-2 border-purple-800 font-semibold'>Add to cart</button>
      </article>
    
    </section>
    <section className="mt-8">
        <h2 className="text-2xl font-semibold">Recommended Products</h2>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {recommendedProducts.map((product) => (
            <Article
              onClick={() =>  handleRecommendedProductClick(product)}
              scrollToTheTop={scrollToTheTop}
              key={product.id}
              imgSrc={product.image}
              title={product.title}
              price={product.price}   
              compare={product.compare}
              discount={product.discount}
            />
          ))}
        </article>
      </section>
    </section>
  );
}

export default SingleItemPage;
