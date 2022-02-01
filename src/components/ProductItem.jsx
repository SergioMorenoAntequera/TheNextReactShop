import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCart from "@icons/bt_add_to_cart.svg"
import addedToCart from "@icons/bt_added_to_cart.svg"
import AppContext from "@contexts/AppContext"

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
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className="AddToCart-Icon">
					<img 
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
