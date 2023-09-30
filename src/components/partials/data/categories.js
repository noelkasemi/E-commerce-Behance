

import {  useEffect } from "react";
 
function CategoriesFetcher({ setData, setError }) {
  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products/categories";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the product data here
        setData(data);
      })
      .catch((error) => {
        // Handle errors
        setError("An error occurred while fetching data.");
        console.error(error);
      });
  }, [setData, setError]); // Empty dependency array to run the effect only once when the component mounts

  return null; // ProductFetcher is responsible for fetching data, so it doesn't render anything
}

export default CategoriesFetcher;