"use client";
import React from "react";
import {useState, useContext} from "react";
import {formatter} from "../../utils/helpers";
import ProductOptions from "./ProductOptions";
import {CartContext} from "../../context/ShopContext";

export default function ProductForm({product}) {
  const {addToCart} = useContext(CartContext);

  const allVariantOptions = product.variants
    ? product.variants?.edges?.map((variant) => {
        const allOptions = {};

        variant.node.selectedOptions.map((item) => {
          allOptions[item.name] = item.value;
        });

        return {
          id: variant.node.id,
          title: product.title,
          handle: product.handle,
          image: variant.node.image?.url,
          options: allOptions,
          variantTitle: variant.node.title,
          variantPrice: variant.node.price,
          variantQuantity: 1,
        };
      })
    : [];

  const defaultValues = {};
  product?.options?.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return {...prevState, [name]: value};
    });

    const selection = {
        ...selectedOptions,
        [name]: value
    }

    allVariantOptions.map(item => {
        if(JSON.stringify(item.options) === JSON.stringify(selection)) {
            setSelectedVariant(item)
        }
    })
  }

  return (
    <div className="flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3">
      <h2 className="mb-2 text-2xl font-bold">{product.title}</h2>
      <span className="pb-3">{formatter.format(product.variants?.edges[0].node.price.amount)}</span>
      {product?.options?.map(({name, values}) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="px-2 py-3 mt-5 text-white duration-300 bg-black rounded-lg hover:bg-gray-800"
      >
        Add To Cart
      </button>
    </div>
  );
}
