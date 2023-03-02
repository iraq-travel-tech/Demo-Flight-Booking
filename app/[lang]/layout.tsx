import NavBar from "@/components/layouts/NavBar";
import "../../styles/globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <title>Travel Website - Explore the World with Us</title>
        <meta
          name="description"
          content="Discover amazing destinations, plan your next adventure and book your trip with our travel website. Join us and explore the world!"
        />
        <meta name="keywords" content="travel, adventure, trip, booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://travel-website-mu.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          property="og:title"
          content="Travel Website - Explore the World with Us"
        />
        <meta
          property="og:description"
          content="Discover amazing destinations, plan your next adventure and book your trip with our travel website. Join us and explore the world!"
        />
        <meta property="og:image" content="/images/planeonsky.jpg" />
        <meta
          property="og:url"
          content="https://travel-website-mu.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
      </head>
      <body className={`dark transition-all`}>
        <div className="dark:bg-black min-h-screen transition-all dark:text-white bg-[#ecf2fa]">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
