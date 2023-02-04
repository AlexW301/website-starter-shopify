import React from "react";
import Link from "next/link";

export default function HerSection({className}) {
  return (
    <div className={`${className} my-48 mx-auto max-w-containerxl px-4 sm:mt-24 md:mt-72 text-center`}>
      <h1 className="font-extrabold text-gray-900 magic">
        <p className="text-xl sm:text-3xl md:text-4xl">Wicked Fast + Secure + Customizable:</p>
        <p className="text-4xl text-transparent magic-text bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sm:text-6xl md:text-7xl">
          Next-Gen <br className="lg:hidden"/> Ecommerce
        </p>
      </h1>
      <h2 className="max-w-md mx-auto mt-3 text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        Upgrade your online shop now.
      </h2>
      <div className="flex items-center justify-center max-w-md mx-auto mt-5 md:mt-8">
        <Link
          className="inline-flex items-center justify-center h-12 px-6 py-3 mr-6 font-medium text-white duration-300 bg-gray-900 border-transparent rounded-md hover:bg-gray-800"
          href={`tel:16032750163`}
        >
          Call Us
        </Link>
        <Link
          className="inline-flex items-center font-semibold text-gray-900 duration-300 hover:text-gray-800"
          href={`mailto:alex@asrpromedia.com`}
        >
          Email
        </Link>
      </div>
    </div>
  );
}