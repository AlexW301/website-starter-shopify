import React, {useEffect, useState} from "react";
import {ProductCard} from "../Ecommerce";
import {searchProducts} from "../../lib/shopify";

export default function ProductList({className, products}) {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  useEffect(() => {
    async function onSearch() {
      const newProducts = await searchProducts(input);
      setSearchResults(newProducts);
    }
    if (input === "") {
      setSearchResults(products);
    } else {
      onSearch();
    }
  }, [input, products]);

  return (
    <div className={`${className}`}>
      {/* Container */}
      <div className="flex flex-col items-center px-4 py-12 text-center xl:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Browse Our Products</h1>
        <p className="max-w-3xl mx-auto mt-4 text-base text-gray-500">
          {`Try out the fastest ecommerce site you've ever seen.`}
        </p>
      </div>
      <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search"
            required
          />
        </div>
      </div>
      <div
        className={`max-w-2xl mx-auto py-8 px-4 sm:pt-12 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center justify-center`}
      >
        {/* Content */}
        {/* <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Products</h2> */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {searchResults.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
        {searchResults.length === 0 && (
          <h4 className="mx-auto text-xl font-semibold text-gray-500">No Products Found...</h4>
        )}
      </div>
    </div>
  );
}
