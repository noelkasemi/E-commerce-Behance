import { useState } from "react";
import CategoriesFetcher from "../components/partials/data/categories";
import CategoriestList from "../components/partials/main/content2";
import ProductList2 from "../components/partials/main/content4";
import ProductFetcher from '../components/partials/data/products'

export default function ForYou({articles, onProductSelect}) {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState('Recommended'); // Default sorting order

  const handleOrderChange = (newOrder) => {
    setSelectedOrder(newOrder)
   
  }

  const handleProductSelect = (selectedProduct) => {
    onProductSelect(selectedProduct)
  }

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };
  const lordIconProps = {
    src: 'https://cdn.lordicon.com/jxwksgwv.json',
    trigger: 'hover',
    colors: 'primary:#121331',
    style: {
      width: '50px',
      height: '50px',
    }
  }

  return (
    <section>
      {selectedCategory ? (<>
         <button className="absolute top-12 w-fit rotate-180 ml-2" onClick={handleCloseCategory}><lord-icon {...lordIconProps}>
</lord-icon></button>
        <ProductList2 onProductSelect={handleProductSelect} onOrderChange={handleOrderChange} selectedOrder={selectedOrder} data={[...productsData, ...articles]} category={selectedCategory} />
        </>
      ) : (
        <>
          <CategoriesFetcher setData={setCategoriesData} setError={setError} />
          <CategoriestList
            data={categoriesData}
            error={error}
            onSelectCategory={setSelectedCategory}
          />
          <ProductFetcher selectedOrder={selectedOrder} setData={setProductsData} setError={setError} />
        </>
      )}
    </section>
  );
}
