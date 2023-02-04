import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ASR Website Starter</title>
        <meta
          name="description"
          content="This is a starting point for a website!"
        />
        <meta
          name="tags"
          content="ASR, Web Development, Web Design"
        />
        <link rel="icon" type="image" href="" />
      </Head>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
