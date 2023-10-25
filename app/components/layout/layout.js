import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import LinkHome from "../link/LinkHome";
import Head from "next/head";

const NAME = "CHALET";
export const DESCRIPTION = "Chalet - Atelier de Design de Interiores";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title id="title">{NAME}</title>
        <link
          rel="icon"
          href="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Poppins:wght@100;200;300&family=Raleway+Dots&family=Raleway:wght@100&family=WindSong&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content={DESCRIPTION} />
        <meta name="name" content={DESCRIPTION} />

        <meta name="keywords" content="Atelier, Design, Decoracao" />
        <meta name="author" content={NAME} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {" "}
        <NavBar />
        {children}
        <LinkHome />
        <Footer />
      </main>
    </div>
  );
}
