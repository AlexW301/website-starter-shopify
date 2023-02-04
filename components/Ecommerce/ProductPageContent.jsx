"use client";
import React from "react";
import Image from "next/image";
import ProductForm from "../Ecommerce/ProductForm";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({product}) {
  const images = [];

  product.images?.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`} className="relative">
        <Image src={image.node.url} alt={image.node.altText} fill style={{objectFit: "cover"}} />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <div
        className={`flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-containerxl w-11/12 mx-auto`}
      >
        <div className="w-full max-w-md overflow-hidden bg-white shadow-lg rounded-2xl md:w-1/2">
          <div className="relative w-full h-96">
            <Swiper
              // install Swiper modules
              style={{"--swiper-navigation-color": "#000", "--swiper-pagination-color": "#000"}}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              loop
              className="h-96 rounded-2xl"
              pagination={{clickable: true}}
              scrollbar={{draggable: true}}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="w-11/12 max-w-3xl pt-16 pb-5 mx-auto text-xl font-bold text-gray-900 md:space-x-4 lg:space-x-8">More Information</p>
      <p className="w-11/12 max-w-3xl mx-auto spacing-y-8 md:space-x-4 lg:space-x-8">{product.description}</p>
      <RecommendedList current={product.id} products={product?.collections?.edges[0].node.products.edges}/>
    </div>
  );
}
