import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: DiagnoCare"
        description="Welcome to DiagnoCare homepage."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      />
      <Head>
        <title>DiagnoCare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
