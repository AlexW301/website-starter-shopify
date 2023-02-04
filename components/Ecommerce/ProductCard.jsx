import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatter } from "../../utils/helpers"

export default function ProductCard({className, product}) {
  const {handle, title} = product.node;

  const {altText, url} = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`} className="group">
      <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
        <div className="relative object-center duration-100 aspect-square group-hover:opacity-75 h-72">
            <Image src={`${url}`} alt={altText} fill className="object-cover object-center overflow-hidden" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
    </Link>
  );
}
