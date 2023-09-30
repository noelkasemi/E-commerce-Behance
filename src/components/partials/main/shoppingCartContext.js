// ShoppingCartContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the initial state of the cart
const initialCartState = {
  cart: [], // An array to store items in the cart
};

// Create a context for the shopping cart
const ShoppingCartContext = createContext();


// Define the cart reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state.cart, action.payload]; // Access state.cart
      localStorage.setItem('cart', JSON.stringify(updatedCartAdd)); // Save to local storage
      return { ...state, cart: updatedCartAdd }; // Return the updated state with cart property

      case 'REMOVE_FROM_CART':
        const updatedCartRemove = state.cart.filter((item) => item.cartItemId !== action.payload); // Use cartItemId for comparison
        localStorage.setItem('cart', JSON.stringify(updatedCartRemove)); // Save to local storage
        return { ...state, cart: updatedCartRemove }; // Return the updated state with cart property
      
    case 'SET_CART':
      return { ...state, cart: action.payload }; // Return the updated state with cart property

    default:
      return state;
  }
}




// Create a custom hook to access the shopping cart context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// Create a ShoppingCartProvider component
export function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Load cart data from local storage when the component mounts
 // Load cart data from local storage when the component mounts
useEffect(() => {
  const savedCart = localStorage.getItem('cart');
;
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    
    if (Array.isArray(parsedCart)) {
      dispatch({ type: 'SET_CART', payload: parsedCart });
    
    } else {
      console.error('Invalid cart data found in local storage:', parsedCart);
    }
  }
}, []);

  

  return (
    <ShoppingCartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
