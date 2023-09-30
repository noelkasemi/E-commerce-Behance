import Trash from '../uitls/svg/trash'
import CheckoutPage from './checkoutPage';
import { useState, useEffect } from 'react';

function CartPage({ cart, onClose, onRemoveFromCart }) {
  const handleRemoveFromCart = (cartItemId) => {
    // Check if cartItemId is not null before attempting to remove
    if (cartItemId !== null) {
      // Dispatch an action to remove the product from the cart
      onRemoveFromCart(cartItemId);
    } else {
      console.error("Invalid cartItemId:", cartItemId);
    }
  };
  

  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }


  // Filter out null items from the cart array
  const filteredCart = cart.filter((item) => item !== null);
  
  // Calculate the total sum of the cart
  const totalSum = filteredCart.reduce((acc, item) => {
    return acc + parseFloat(item.compare || 0); // Parse as a float
  }, 0).toFixed(2); // Format the result with two decimal places
  

  const isCartEmpty = filteredCart.length === 0
  const lordIconProps = {
    src: 'https://cdn.lordicon.com/jxwksgwv.json',
    trigger: 'hover',
    colors: 'primary:#121331',
    style: {
      width: '50px',
      height: '50px',
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <article className='w-full items-center mt-12 flex'>
 <button onClick={onClose} className=" w-fit ml-4 flex items-center rotate-180">
<lord-icon {...lordIconProps}>
</lord-icon>
</button>
<h2 className="text-5xl text-center w-full my-4 sm:mr-0 mr-4 font-bold">Cart</h2>
</article>   
     {show ? <CheckoutPage productPrice={totalSum} /> :
    <article className={` text-center flex flex-col items-center my-4 md:px-16`}>
      
      <article className="border shadow-xl p-2 w-full">
        <h1>
          <p className=" w-full border-b flex py-4">
            <p className="w-4/12 ml-32 sn:ml-44 font-bold text-2xl  text-center">Product</p>
            <p className="hidden w-7/12 mr-14 sm:block font-bold text-right text-2xl w-full">Price</p>
            
          </p>
        </h1>
        <ul className='divide-y'>
          { filteredCart.length === 0 ? <p className='text-xl my-2'>Cart is empty</p> :
          filteredCart.map((item, index) => (
            <li className="w-full shadow-sm py-4 px-4 items-center flex" key={`${item.id}-${index}`}>
              <p className="w-3/12 ">
                <img className="md:w-44 md:h-36 h-24 " src={item.image} alt={item.title} />
                
              </p>
              <h3 className='w-7/12'>
              <p className="text-center h-12 text-elipsis overflow-hidden lg:text-left">{item.title}
              
              </p>
              <p className='md:hidden block'><strong className='text-xl'>Price:</strong> ${item.compare}</p>
              </h3>
              <p className="hidden w-2/12 md:block font-bold text-xl text-right">${item.compare}</p>
              <p className="pr-4 pl-4">
                <button className='text-xl' onClick={() => handleRemoveFromCart(item.cartItemId)}><Trash /></button>
              </p>
            </li>
          ))}
        </ul>
      </article>

      <p className="mt-4 text-2xl">
        Total: ${totalSum}
      </p>

        {isCartEmpty ? <button disabled className='px-5 py-2.5 text-lg text-white font-semibold rounded bg-gray-500'>Chekout</button> :    
      <button onClick={toggleShow} className="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
       <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Checkout</span> 
        </button> }

    </article>
}
    </>
  );
}

export default CartPage;
