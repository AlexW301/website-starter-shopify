import React from "react";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "../context/ShopContext";
import MiniCart from "../components/Ecommerce/MiniCart";

export default function SiteHeader({className}) {
  const {cart, cartOpen, setCartOpen} = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className="sticky top-0 z-20 bg-white border-b">
      <div className="flex items-center justify-between px-4 pt-4 pb-4 mx-auto max-w-containerxl lg:max-w-containerxl">
        <Link href={`/`} className="cursor-pointer">
          <span className="pt-1 text-lg font-bold">ASR Next-Gen Ecommerce</span>
        </Link>
        <button
          className="font-bold cursor-pointer text-md"
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
        >
          Cart ({cartQuantity})
        </button>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
}