import React, { useContext } from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import Image from 'next/image';
import AppContext from '@contexts/AppContext';
import AmountModifier from '@components/AmountModifier';

export default function CheckoutItem({product}) {
  const {
		removeProductFromCart
	} = useContext(AppContext);


  return <div className={styles.CheckoutItem}>

    <Image className={styles.image} src={product.images[0]} width={100} height={100} alt={product.title}/>
    
    <div>
        <p className={styles.title}> {product.title} </p>
        <p className={styles.description}> {product.description} </p>
    </div>

    <div>
      <p> {product.price} </p>
      
      <div style={{display:"flex", placeItems: "center"}}>
        <AmountModifier product={product}/>
        <span onClick={()=>{removeProductFromCart(product)}}> remove </span>
      </div>
    </div>
  </div>;
}
