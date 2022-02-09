import useClickOutsideClose from "@hooks/useClickOutsideClose";
import MyOrderStyles from "@styles/MyOrder.module.scss";
import ProductItemStyles from "@styles/ProductItem.module.scss";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useInitialState() {
  
  const {
    storageItem: productsInCart, 
    setLocalElement: setProductsInCart,
  } = useLocalStorage("cart_V1", []);
  
  const [newAddedMessage, setNewAddedMessage] = useState(false)

  function addProductToCart(product) {
    // if(productsInCart.includes(product)) return;
    let auxProductsInCart = [...productsInCart];
    let productFound = auxProductsInCart.find((p) => p.id === product.id);
    if (!productFound) {
      setProductsInCart([...auxProductsInCart, { ...product, amount: 1 }]);
      
      setNewAddedMessage(true)
      setTimeout(() => {
        setNewAddedMessage(false)
      }, 3000);

    } else {
      productFound = { ...productFound, amount: ++productFound.amount };
      setProductsInCart(auxProductsInCart);
    }
  }
  function removeProductFromCart(product) {
    if (!productsInCart.includes(product)) return;
    setProductsInCart([...productsInCart.filter((p) => p.id !== product.id)]);
  }
  function changeAmount(product, amountChange) {
    let auxProductsInCart = [...productsInCart];
    let auxProduct = auxProductsInCart.find((p) => p.id === product.id);
    auxProduct.amount += amountChange;

    if (auxProduct.amount > -1) {
      setProductsInCart(auxProductsInCart);
    } else {
      removeProductFromCart(auxProduct);
    }
  }

  function getTotalCount() {
    let total = 0;
    productsInCart.forEach((p) => (total += p.amount ? p.amount : 0));
    return total;
  }
  function getTotalPrice() {
    let total = 0;
    productsInCart.forEach((p) => (total += p.amount * p.price));
    return total;
  }

  const [toggleOrdersSafeArea, toggleOrders, setToggleOrders] = useClickOutsideClose([
    `.${MyOrderStyles.MyOrder}`, 
    `.${ProductItemStyles['AddToCart-Icon']}`
  ]);

  return {
    productsInCart,
    setProductsInCart,
    addProductToCart,
    removeProductFromCart,
    productsInCartCount: getTotalCount(),
    changeAmount,
    getTotalPrice,

    toggleOrdersSafeArea,
    toggleOrders,
    setToggleOrders,

    newAddedMessage, setNewAddedMessage
  };
}
