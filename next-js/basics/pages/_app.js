import '../styles/globals.css';

// included in every page into the <body> tag
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;