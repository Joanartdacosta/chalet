import Head from "next/head";
import NavBar from "../UI/navbar/NavBar";
import Footer from "../UI/footer/Footer";
import LinkHome from "../UI/link/LinkHome";
import { GoogleFonts } from "next-google-fonts";
import NextHead from "next/head";

const NAME = "CHALET";
export const DESCRIPTION = "Chalet - Atelier de Design de Interiores";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <NextHead>
          <title id="title">{NAME}</title>
          <link
            rel="icon"
            href="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
          />

          <meta name="description" content={DESCRIPTION} />
          <meta name="name" content={DESCRIPTION} />

          <meta name="keywords" content="Atelier, Design, Decoracao" />
          <meta name="author" content={NAME} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
