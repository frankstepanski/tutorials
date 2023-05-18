import Document, { Head, Html, Main, NextScript } from "next/document";

// The _document.js file allows direct access to the <html> and <body> tags
// This is useful for meta tags, fonts, SEO, and other tags that need to be added to the <head> tag
// https://nextjs.org/docs/pages/building-your-application/routing/custom-document

// Is a class because we need to extend the Document class from next/document
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;