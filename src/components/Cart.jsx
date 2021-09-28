import React from "react";
import {useCartContext} from "../cartContext/cartContext";


const Cart = () => {
  const { cartList, deleteFromCart } = useCartContext()
  console.log(cartList)
  return (
    <>

    </>
  );
};

export default Cart;
