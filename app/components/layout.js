import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import layoutStyles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const name = "CHALET";
export const siteTitle = "Chalet - Atelier de Design de Interiores";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <div>
          <NavBar />
        </div>
        <link
          rel="icon"
          href="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
        />
        <meta name="CHALET" content="Atelier de Design de Interiores" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <header className={layoutStyles.header}>
        {home ? (
          <></>
        ) : (
          <div>
            <p></p>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">
            <img
              src="https://chalet-webapp.s3.amazonaws.com/Logotipo.png"
              alt="chalet-logo"
              className={layoutStyles.logo}
            ></img>
          </Link>
        </div>
      )}
    </div>
  );
}
