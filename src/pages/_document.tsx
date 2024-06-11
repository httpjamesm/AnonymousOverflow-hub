import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>AO Instances</title>
        <link rel="icon" href="/favicon.webp" />
        <meta
          name="description"
          content="Find an AnonymousOverflow instance to get programming help without compromising your privacy."
        />
        <meta name="theme-color" content="#8CFEC0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
