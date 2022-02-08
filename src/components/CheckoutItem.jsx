import React, { useContext } from 'react';
import styles from '@styles/CheckoutItem.module.scss';
import Image from 'next/image';
import AppContext from '@contexts/AppContext';
import AmountModifier from '@components/AmountModifier';
import { modalTypes, useModal } from '@hooks/useModal';

export default function CheckoutItem({product}) {
  const {
		removeProductFromCart
	} = useContext(AppContext);

  const [ [deleteDialogShow, setDeleteDialogShow], Modal] = useModal(modalTypes.confirm);


  return <div className={styles.CheckoutItem}>

    <Image className={styles.image} src={product.images[0]} width={100} height={100} alt={product.title}/>
    
    <div>
        <p className={styles.title}> {product.title} </p>
        <p className={styles.description}> {product.description} </p>
    </div>

    <div>
      <p> Total: {product.price * product.amount} </p>
      
      
      <div style={{display:"flex", placeItems: "center"}}>
        <AmountModifier product={product}/>
        <span onClick={()=>{setDeleteDialogShow(true)}}> remove </span>
      </div>

      {product.amount > 1 &&
        <p> Unit: {product.price} </p>
      }

    </div>


    <Modal 
      title={"Remove From Cart"} 
      message={`Are you sure you want to delete ${product.title} from the cart? `}/>
  </div>;
}
