import "@/styles/globals.css";
import "flowbite";
import Layout from "@/layout";
import {StateContext} from "../context/StateContext";
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
  );
}
