import React, { useContext } from 'react';
import addToCart from "@icons/bt_add_to_cart.svg"
import addedToCart from "@icons/bt_added_to_cart.svg"
import AppContext from "@contexts/AppContext"
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({product}) => {
	const { productsInCart, addProductToCart, setToggleOrders } = useContext(AppContext);
	let iconToShow = addToCart;

	function handleAddToCart() {
		let productInList = productsInCart.find(p=> p.id === product.id)
		if(!productInList || productInList?.amount == 0) {
			addProductToCart(product);
		} else {
			setToggleOrders(true)	
		}
	}
	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width="240px" height="240px"/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles['AddToCart-Icon']}>
					<Image 
						onClick={handleAddToCart} 
						src={!productsInCart.map(p=>p.id).includes(product.id)  ? addToCart : addedToCart} 
						alt="add To Cart" 
					/>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
