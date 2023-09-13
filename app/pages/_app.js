import Layout from "../components/layout/layout";
import "../styles/global.css";
import { Poppins } from "@next/font/google";
import { Roboto } from "@next/font/google";
import { WindSong } from "@next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: "200",
});

const roboto = Roboto({
  variable: "--roboto-font",
  subsets: ["latin"],
  weight: "100",
});

const windsong = WindSong({
  variable: "--windsong-font",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
