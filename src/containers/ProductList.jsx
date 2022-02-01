import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetApiData from '@hooks/useGetApiData';
import '@styles/ProductList.scss';

const API = "https://api.escuelajs.co/api/v1/products"

const ProductList = () => {

	const products = useGetApiData(API)

	return (<div className="ProductList">
		
		{products.map(product => 
			<ProductItem key={product.id} product={product}/>
		)}

	</div>);
}

export default ProductList;
