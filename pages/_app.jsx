import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "flowbite";
import Layout from "@/layout";
import {StateContext} from "../context/StateContext";
import ShopProvider from "../context/ShopContext";
import {Inter, Khula} from "@next/font/google";

const khula = Khula({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function App({Component, pageProps}) {
  return (
    <ShopProvider>
      <StateContext>
        <Layout>
          <style jsx global>
            {`
              :root {
                --inter-font: ${inter.style.fontFamily};
                --khula-font: ${khula.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ShopProvider>
  );
}
