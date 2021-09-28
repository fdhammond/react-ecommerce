import React from "react";
import {useCartContext} from "../cartContext/cartContext";

const Cart = () => {
  const {cartList, deleteFromCart} = useCartContext()
  return (
    <>
      {cartList.map(item => <div key={item.id}>
        <h2>{item.item.name}</h2>
        <button onClick={()=> deleteFromCart(item)}>DELETE</button>
      </div>
      )}
    </>
  );
};

export default Cart;
