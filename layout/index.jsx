import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ASR Ecommerce Sample Site</title>
        <meta name="description" content="This is a sample for ASR ecommerce sites built with Next.js and Tailwind CSS" />
        <meta name="tags" content="Next JS, Tailwind CSS, Shopify, Ecommerce" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image" href="/favicon.png" />
      </Head>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
