import "../styles/globals.css";
import AppContext from "@contexts/AppContext";
import useInitialState from "@hooks/useInitialState";
import Header from "@components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> React Shop </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppContext.Provider value={useInitialState()}>
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
