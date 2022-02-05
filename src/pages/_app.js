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
        {/* <Header />
        <Component {...pageProps} /> */}
        <div style={{}}>
          <Column
            imagesClass="up"
            images={[
              'http://via.placeholder.com/410x681',
              'http://via.placeholder.com/410x682',
              'http://via.placeholder.com/410x683',
            ]}
          />  
           <Column
            imagesClass="down"
            images={[
              'http://via.placeholder.com/410x681',
              'http://via.placeholder.com/410x682',
              'http://via.placeholder.com/410x683',
            ]}
          />  
        
        </div>
        
      </AppContext.Provider>
    
    </>
  );
}


import styles from "@styles/index.module.scss";
import React from 'react';
function Column({images, imagesClass}) {


  return <div className={styles.Column}>
      <div className={styles['Column-Container']}>
        {images.map((image, index) => 
          <img src={image} key={index} alt="alt"
            className={`${styles.image} ${styles[imagesClass]}`} 
          />)
        }
      </div>
  </div>;
}


export default MyApp;

