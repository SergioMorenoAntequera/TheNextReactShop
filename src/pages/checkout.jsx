import React, { useContext } from "react";
import styles from "@styles/Checkout.module.scss";
import AppContext from "@contexts/AppContext";
import Head from "next/head";
import CheckoutItem from "@components/CheckoutItem";

export default function Checkout() {
  const { productsInCart, getTotalPrice } = useContext(AppContext);

  return (
    <>
      <Head>
        <title> Checkout </title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles.title}> Checkout </h1>

          <div className={styles.CheckoutStructure}>

            <div>
              {productsInCart.map((p) => (
                <CheckoutItem key={`checkoutItem-${p.id}`} product={p} />
              ))}
            </div>

            <div className={styles["Checkout-content"]}>
              <div className={styles.order}>
                <p>
                  <span> 03.25.21 </span>
                  <span> 6 articles </span>
                </p>
                <p>${getTotalPrice()}</p>
              </div>
              <button> CTA </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
