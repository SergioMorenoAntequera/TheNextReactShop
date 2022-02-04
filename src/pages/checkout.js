import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@contexts/AppContext';

export default function Checkout() {
    const { 
		productsInCart,
		getTotalPrice
	} = useContext(AppContext);

	return (
		<div className={styles.Checkout}>
			<div className={styles['Checkout-container']}>
				<h1 className={styles.title}>My order</h1>
				<div className={styles['Checkout-content']}>
					<div className={styles.order}>
						<p>
							<span> 03.25.21 </span>
							<span> 6 articles </span>
						</p>
						<p>${getTotalPrice()}</p>
					</div>
				</div>
				{productsInCart.map(p=>
                    <OrderItem key={`checkoutItem-${p.id}`} product={p}/>
                )}
			</div>
		</div>
	);
}
