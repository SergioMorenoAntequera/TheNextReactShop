import React, { useState } from 'react';
import useClickOutsideClose from '@hooks/useClickOutsideClose'

export default function useInitialState() {
    const [productsInCart, setProductsInCart] = useState([]);

    function addProductToCart(product) {
        // if(productsInCart.includes(product)) return;
        let auxProductsInCart = [...productsInCart];
        let productFound = auxProductsInCart.find(p=>p.id === product.id)
        if(!productFound){
            setProductsInCart([...auxProductsInCart, {...product, amount:1}]);
        } else {
            productFound = {...productFound, amount: ++productFound.amount}
            setProductsInCart(auxProductsInCart);
        }
    }
    function removeProductFromCart(product) {
        if(!productsInCart.includes(product)) return;
        setProductsInCart([...productsInCart.filter(p=>p.id!==product.id)]);
    }
    function changeAmount(product, amountChange) {
        let auxProductsInCart = [...productsInCart]
        let auxProduct = auxProductsInCart.find(p=>p.id === product.id)
        auxProduct.amount += amountChange;
    
        if(auxProduct.amount > -1) {
            setProductsInCart(auxProductsInCart)
        } else {
            removeProductFromCart(auxProduct)
        }
    }

    function getTotalCount() {
        let total = 0;
        productsInCart.forEach(p=>total += p.amount?p.amount:0)
        return total
    }
    function getTotalPrice() {
        let total = 0;
        productsInCart.forEach(p=>total += p.amount * p.price)
        return total
    }
    

    const [toggleOrdersSafeArea, toggleOrders, setToggleOrders] = useClickOutsideClose([".MyOrder", ".AddToCart-Icon"])

    return {
        productsInCart,
        setProductsInCart,
        addProductToCart,
        removeProductFromCart,
        productsInCartCount : getTotalCount(),
        changeAmount,
        getTotalPrice,

        toggleOrdersSafeArea, toggleOrders, setToggleOrders,
    };
}
