import { useState, useRef, useEffect } from "react";
import ProductFetcher from "../data/products";

import Lines from "../../../uitls/svg/lines";
import { motion } from "framer-motion";
import X from "../../../uitls/svg/x";

export default function SecondSection({ style, onProductSelect }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const sectionRef = useRef(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPopularityFilter, setSelectedPopularityFilter] = useState(
    "Filter by popularity"
  );
  const [IsChecked, setIsChecked] = useState(false);

  const [show2, setShow2] = useState(false);

  const toggleShow2 = () => {
    setShow2(!show2);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      // If the category is already selected, remove it
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    } else {
      // If the category is not selected, add it
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "-276px" }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = filteredItems.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length
    ? sortedData.filter((item) => selectedCategories.includes(item.category))
    : sortedData;

  let popularityFilteredProducts = [...filteredProducts];
  if (selectedPopularityFilter === "Highest rated") {
    popularityFilteredProducts = popularityFilteredProducts.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
  } else if (selectedPopularityFilter === "Lowest rated") {
    popularityFilteredProducts = popularityFilteredProducts.sort(
      (a, b) => a.rating.rate - b.rating.rate
    );
  }

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`${style} flex flex-col pt-4 mt-12 pl-2 md:mt-16 sm:pb-0 pb-2 pr-4 mb-16 sm:mb-20`}
    >
      {/* Search */}
      <section
        ref={sectionRef}
        className="absolute left-0 md:px-44 md:mt-4 lg:mt-0 flex flex-col items-center w-full"
      >
        <article className="flex w-full">
          <svg
            className="absolute mt-[14px] left-2 md:left-[183px] md:ml-1 text-gray-500 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
          <input
            value={search}
            onChange={handleSearch}
            onClick={toggleShow}
            type="text"
            placeholder="Search the creative world at work"
            className={`border ${
              show ? "none" : "rounded-b-lg"
            } bg-transparent  placeholder-gray-500 font-bold text-2xl border-gray-300 rounded-t-lg w-full py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none`}
          />
        </article>
        {show && (
          <article className="bg-slate-100 h-[400px] border-black shadow-lg w-full flex top-16 rounded-b-lg rounded-t-sm z-20">
            <section className="xl:block hidden px-2  w-[25%]">
              <h1 className="text-center font-bold my-2 text-lg">
                Filter Products by price
              </h1>
              <h1 className="flex">
                <input
                  type="range"
                  value={minPrice}
                  min="0"
                  max="500"
                  onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                  className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                  id="customRange1"
                />
                <input
                  value={maxPrice}
                  min="500"
                  max="1000"
                  onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                  type="range"
                  className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                  id="customRange1"
                />
              </h1>
              <h1 className="flex justify-between mt-1">
                <p className="font-semibold text-lg">{minPrice}$</p>
                <p className="font-semibold text-lg">{maxPrice}$</p>
              </h1>
              <h1 className="text-center font-bold my-2 text-lg">Categories</h1>
              <h1>
                {uniqueCategories.map((category) => (
                  <label
                    key={category.length + 2}
                    className="flex justify-between text-semibold"
                  >
                    <p className="flex items-center text-semibold">
                      <input
                        onClick={() => toggleCategory(category)}
                        className={`appearance-none border-slate-400 hover:border-black checked:border-black border-2 cursor-pointer border w-5 h-5 rounded-full mr-2`}
                        id={category}
                        type="checkbox"
                        value={IsChecked}
                        onChange={handleCheckboxChange}
                        checked={selectedCategories.includes(category)}
                      />
                      {selectedCategories.includes(category) && (
                        <span className="bg-blue-500 w-3 h-3 rounded-full ml-[4px] mb-[1px] absolute"></span>
                      )}
                      <span
                        className="font-semibold  text-lg"
                        htmlFor={category}
                      >
                        {category}
                      </span>
                    </p>
                    <span className="ml-12 text-gray-400">
                      {category.length}
                    </span>
                  </label>
                ))}
              </h1>
              <h1 className="flex flex-col items-center">
                <select
                  onChange={(e) => setSelectedPopularityFilter(e.target.value)}
                  value={selectedPopularityFilter}
                  className=" rounded border-black border mt-6"
                >
                  <option value="Filter by popularity">
                    Filter by popularity
                  </option>
                  <option value="Highest rated">Highest rated</option>
                  <option value="Lowest rated">Lowest rated</option>
                </select>
              </h1>
            </section>
            {show2 && (
              <motion.section
                initial="closed"
                animate={show2 ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-[267px] fixed h-full xl:hidden block z-50 top-14 px-2 left-0 overflow-y-auto bg-slate-200"
              >
                <X style={`cursor-pointer`} onClick={toggleShow2} />
                <h1 className="text-center font-bold my-2 text-lg">
                  Filter Products by price
                </h1>
                <h1 className="flex">
                  <input
                    type="range"
                    value={minPrice}
                    min="0"
                    max="500"
                    onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                    id="customRange1"
                  />
                  <input
                    value={maxPrice}
                    min="500"
                    max="1000"
                    onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                    type="range"
                    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                    id="customRange1"
                  />
                </h1>
                <h1 className="flex justify-between mt-1">
                  <p className="font-semibold text-lg">{minPrice}$</p>
                  <p className="font-semibold text-lg">{maxPrice}$</p>
                </h1>
                <h1 className="text-center font-bold my-2 text-lg">
                  Categories
                </h1>
                <h1>
                  {uniqueCategories.map((category) => (
                    <label
                      className="flex justify-between text-semibold"
                      key={category.length + 1}
                    >
                      <p className="flex items-center text-semibold">
                        <input
                          onClick={() => toggleCategory(category)}
                          className={`appearance-none border-slate-400 hover:border-black checked:border-black border-2 cursor-pointer border w-5 h-5 rounded-full mr-2`}
                          id={category}
                          type="checkbox"
                          value={IsChecked}
                          onChange={handleCheckboxChange}
                          checked={selectedCategories.includes(category)}
                        />
                        {selectedCategories.includes(category) && (
                          <span className="bg-blue-500 w-3 h-3 rounded-full ml-[4px] mb-[1px] absolute"></span>
                        )}
                        <span
                          className="font-semibold  text-lg"
                          htmlFor={category}
                        >
                          {category}
                        </span>
                      </p>
                      <span className="ml-12 text-gray-400">
                        {category.length}
                      </span>
                    </label>
                  ))}
                </h1>
              </motion.section>
            )}
            <section className="w-full xl:w-[75%] overflow-auto scroll-smooth relative ">
              <h1 className=" xl:hidden ml-4 py-1 block flex justify-between">
                <Lines onClick={toggleShow2} style={`w-8 h-8 cursor-pointer`} />
                <select
                  onChange={(e) => setSelectedPopularityFilter(e.target.value)}
                  value={selectedPopularityFilter}
                  className="xl:hidden block mr-2 rounded border-black border mt-1"
                >
                  <option value="Filter by popularity">
                    Filter by popularity
                  </option>
                  <option value="Highest rated">Highest rated</option>
                  <option value="Lowest rated">Lowest rated</option>
                </select>
              </h1>

              {error ? (
                <p>error fetching products</p>
              ) : (
                popularityFilteredProducts.map((item) => (
                  <article key={item.id} className="py-2 border w-full">
                    <button
                      onClick={() => onProductSelect(item)}
                      key={item.id + 1}
                      className="flex px-2 items-center font-semibold w-full"
                    >
                      <img
                        key={item.id + 2}
                        className="w-10 h-10 mr-2"
                        src={item.image}
                        alt={item.title}
                      />
                      <p key={item.id + 3}>{item.title}</p>
                      <p className="ml-4 line-through">{item.price}$</p>
                      <p className="ml-4 font-bold text-lg">
                        {((item.price / 100) * 50).toFixed(2)}$
                      </p>
                    </button>
                  </article>
                ))
              )}
            </section>
          </article>
        )}
      </section>
      <ProductFetcher setData={setData} setError={setError} />
    </section>
  );
}
