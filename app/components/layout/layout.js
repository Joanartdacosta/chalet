import Head from "next/head";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import LinkHome from "../link/LinkHome";
import { GoogleFonts } from "next-google-fonts";
import NextHead from "next/head";
import { Poppins } from "@next/font/google";
import { Roboto } from "@next/font/google";
import { WindSong } from "@next/font/google";

const POPPINS = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: "200",
});

const ROBOTO = Roboto({
  variable: "--roboto-font",
  subsets: ["latin"],
  weight: "100",
});

const WINDSONG = WindSong({
  variable: "--windsong-font",
  subsets: ["latin"],
  weight: "400",
});

const name = "CHALET";
export const siteTitle = "Chalet - Atelier de Design de Interiores";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <NextHead>
          <title id="title">{siteTitle}</title>
          <link
            rel="icon"
            href="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          />

          <meta name="description" content="Atelier de Design de Interiores" />
          <meta name="name" content={siteTitle} />

          <meta name="keywords" content="Atelier, Design, Decoracao" />
          <meta name="author" content="Chalet" />
        </NextHead>
      </Head>

      <main>
        {" "}
        <NavBar />
        {children}
      </main>
      {!home && (
        <div>
          <LinkHome />
          <Footer />
        </div>
      )}
    </div>
  );
}
