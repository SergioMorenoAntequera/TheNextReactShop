import React, { useContext } from 'react';
import AppContext from "@contexts/AppContext";
import close from "@icons/icon_close.png";
import styles from "@styles/OrderItem.module.scss";
import Image from 'next/image';

const OrderItem = ({product}) => {
	const {
		changeAmount,
		removeProductFromCart
	} = useContext(AppContext);

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product.images[0]} alt={product.title} width={100} height={100}/>
			</figure>

			<div className={styles.left}>
				<p>{product.title}</p>
				<div className={styles.AmountCalculator}> 
					<div className={styles.Minus} onClick={()=>{changeAmount(product, -1);}}> - </div>
					<div className={styles.Amount}> {product.amount} </div>
					<div className={styles.Plus} onClick={()=>{changeAmount(product, +1);}}> + </div>
				</div>
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
