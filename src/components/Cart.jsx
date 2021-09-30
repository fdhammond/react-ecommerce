import React from "react";
import {useCartContext} from "../cartContext/cartContext";


const Cart = () => {
  const { cartList, deleteFromCart } = useCartContext()
  console.log('cartList en cart', cartList)
  return (
    <>
      {cartList.map(item => <div>
        <h2>{item.item.name}</h2>
      </div>
      )}

    </>
  );
};

export default Cart;
