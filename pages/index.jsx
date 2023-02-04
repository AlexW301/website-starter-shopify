import Head from "next/head";
import {getProductsInCollection} from "../lib/shopify";
import {HeroSection, FeaturesSection} from "@/components/Home";
import {ProductList} from "@/components/Ecommerce";

export default function Home({products}) {
  return (
    <>
      <main>
        <HeroSection />
        <ProductList products={products} />
        <FeaturesSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection("frontpage");

  return {
    props: {products}, // will be passed to the page component as props
  };
}
