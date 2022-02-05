import React from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import Image from 'next/image';

export default function CheckoutItem({product}) {
  return <div className={styles.CheckoutItem}>

    <Image src={product.images[0]} width={100} height={100} alt={product.title}/>
    <div>
        <p> {product.title} </p>
        <p> {product.description} </p>
    </div>
  </div>;
}
