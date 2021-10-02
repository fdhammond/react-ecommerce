import React from 'react';
import { Cart4 } from "react-bootstrap-icons";
import { useCartContext } from "../../cartContext/cartContext";
import Badge from "react-bootstrap/Badge";



export const CartWidget = () => {
    const {iconCart} = useCartContext()
    return (
        <div>
            <Cart4 size={30} style={{ color: 'white'}}/>
            <span
            style={{ marginLeft: '-10px'}}
            ><Badge bg="warning">{iconCart()}</Badge></span>
        </div>
    );
};

export default CartWidget;