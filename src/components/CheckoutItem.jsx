import React from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import Image from 'next/image';

export default function CheckoutItem({product}) {
  return <div className={styles.CheckoutItem}>

    <Image className={styles.image} src={product.images[0]} width={100} height={100} alt={product.title}/>
    
    <div>
        <p className={styles.title}> {product.title} </p>
        <p className={styles.description}> {product.description} </p>
    </div>

    <div>
      <p> el account modifier y el acount en total </p>
      <p> remove </p>
    </div>
  </div>;
}
