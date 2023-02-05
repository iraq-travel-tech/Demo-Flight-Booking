import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      {/* dark */}
      <body className={`dark transition-all`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
