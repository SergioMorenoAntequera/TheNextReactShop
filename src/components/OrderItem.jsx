import React, { useContext } from 'react';
import AppContext from "@contexts/AppContext";
import close from "@icons/icon_close.png";
import styles from "@styles/OrderItem.module.scss";
import Image from 'next/image';
import AmountModifier from './AmountModifier';

const OrderItem = ({product}) => {
	const {
		removeProductFromCart
	} = useContext(AppContext);

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product.images[0]} alt={product.title} width={100} height={100}/>
			</figure>

			<div className={styles.left}>
				<p>{product.title}</p>
				<AmountModifier product={product}/>
			</div>

			<div className={styles.PriceTags}>
				<p>${product.price}</p>
				{product.amount > 1 &&
					<p className={styles.WithAmount}> ${product.price * product.amount} </p>
				}
			</div>
			
			<Image className={styles.CloseCross} 
				src={close} width={10} height={10}
				onClick={()=>removeProductFromCart(product)} 
				alt="close" 
			/>
		</div>
	);
};

export default OrderItem;
