import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@contexts/AppContext"
import flechita from '@icons/flechita.svg'
import styles from "@styles/MyOrder.module.scss"
import Link from 'next/link';

const MyOrder = ({setToggleOrders}) => {
	const { 
		productsInCart,
		getTotalPrice
	} = useContext(AppContext);

	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={()=>setToggleOrders(false)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				
				<div className='order-products'>
					{productsInCart.map(p=>
						<OrderItem key={`orderItem-${p.id}`} product={p}/>
					)}
				</div>
				
				

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${getTotalPrice()}</p>
				</div>
				<Link className="primary-button" href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
