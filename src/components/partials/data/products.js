import { useEffect } from "react";

function ProductFetcher({ setData, setError, selectedOrder }) {
  useEffect(() => {
    let apiUrl = 'https://fakestoreapi.com/products';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const sortedData = sortData(data, selectedOrder)
        setData(sortedData);
      })
      .catch((error) => {
        // Handle errors
        setError("An error occurred while fetching data.");
        console.error(error);
      });
  }, [setData, setError, selectedOrder]);
  
  function sortData(data, order) {
    if (order === 'Ascending') {
      return data.slice().sort((a, b) => a.price - b.price)
    } else if (order === 'Descending') {
      return data.slice().sort((a, b) => b.price - a.price)
    } else {
      return data
    }
  } 

  return null;
}

export default ProductFetcher;
