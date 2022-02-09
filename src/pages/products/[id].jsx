import React from 'react'


function Product({product}) {

    return (
        <div>
            {product.title}
        </div>
    )
}

const API = "https://api.escuelajs.co/api/v1/products";
Product.getInitialProps = async ({query}) => {
    let request = await fetch(`${API}/${query.id}`)
    let product = await request.json();
    return { product: product }
}

export default Product;