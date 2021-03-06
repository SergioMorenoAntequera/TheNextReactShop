import React, { useContext } from 'react';
import addToCart from "@icons/bt_add_to_cart.svg";
import addedToCart from "@icons/bt_added_to_cart.svg";
import AppContext from "@contexts/AppContext";
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProductItem = ({product}) => {
	const { productsInCart, addProductToCart, setToggleOrders } = useContext(AppContext);

	function handleAddToCart() {
		let productInList = productsInCart.find(p=> p.id === product.id);
		if(!productInList || productInList?.amount == 0) {
			addProductToCart(product);
		} else {
			setToggleOrders(true);
		}
	}
	return (
		<div className={styles.ProductItem}>
			<Link href={`/products/${product.id}`} passHref >
				<a> <Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" /> </a>
			</Link>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles['AddToCart-Icon']}>
					<Image 
						onClick={handleAddToCart} 
						src={!productsInCart.map(p=>p.id).includes(product.id)  ? addToCart : addedToCart} 
						alt="add To Cart"  width={35} height={35}
					/>
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
