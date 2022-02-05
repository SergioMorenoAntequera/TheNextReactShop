import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@contexts/AppContext";
import flechita from '@icons/flechita.svg';
import styles from "@styles/MyOrder.module.scss";
import Link from 'next/link';
import Image from 'next/image';

const MyOrder = ({setToggleOrders}) => {
	const { 
		productsInCart,
		getTotalPrice
	} = useContext(AppContext);

	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image src={flechita} alt="arrow" width={10} height={10} onClick={()=>setToggleOrders(false)}/>
				<p className={styles["title"]}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				
				<div className={styles["order-products"]}>
					{productsInCart.map(p=>
						<OrderItem key={`orderItem-${p.id}`} product={p}/>
					)}
				</div>
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${getTotalPrice()}</p>
				</div>
				
				<div className={styles["primary-button"]}>
					<Link href="/checkout">
						Checkout
					</Link>
				</div>
			</div>
		</aside>
	);
};

export default MyOrder;
