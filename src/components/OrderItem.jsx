import React, { useContext } from 'react';
import AppContext from "@contexts/AppContext"
import '@styles/OrderItem.scss';

import close from "@icons/icon_close.png"

const OrderItem = ({product}) => {
	const {
		changeAmount,
		removeProductFromCart
	} = useContext(AppContext);

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<div className='left'>
				<p>{product.title}</p>
				<div className='AmountCalculator'> 
					<div className='Minus' onClick={()=>{changeAmount(product, -1)}}> - </div>
					<div className='Amount'> {product.amount} </div>
					<div className='Plus' onClick={()=>{changeAmount(product, +1)}}> + </div>
				</div>
			</div>
			<div className='PriceTags'>
				<p>${product.price}</p>
				{product.amount > 0 &&
					<p className='WithAmount'> ${product.price * product.amount} </p>
				}
			</div>
			<img className='CloseCross' 
				src={close} 
				onClick={()=>removeProductFromCart(product)} 
				alt="close" 
			/>
		</div>
	);
}

export default OrderItem;
