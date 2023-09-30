// MainContent.js
import React, { useState } from "react";
import ProductFetcher from "../data/products";
import ProductList from "./content";

function MainContent({ articles, onProductSelect }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState('Recommended'); // Default sorting order

  const handleOrderChange = (newOrder) => {
    setSelectedOrder(newOrder)
  }

  const handleProductSelect = (selectedProduct) => {
    onProductSelect(selectedProduct)
  }

  return (
    <>
      <ProductFetcher selectedOrder={selectedOrder} setData={setData} setError={setError} />
      <ProductList onProductSelect={handleProductSelect} onOrderChange={handleOrderChange} selectedOrder={selectedOrder} data={[...data, ...articles]} error={error} />
    </>
  );
}

export default MainContent;
