import Head from "next/head";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import LinkHome from "../link/LinkHome";

const name = "CHALET";
export const siteTitle = "Chalet - Atelier de Design de Interiores";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title id="title">{siteTitle}</title>
        <link
          rel="icon"
          href="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Atelier de Design de Interiores" />
        <meta name="name" content={siteTitle} />
        <meta name="keywords" content="Atelier, Design, Decoracao" />
        <meta name="author" content="Chalet" />
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
