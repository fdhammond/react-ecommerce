import React from 'react';
import { Cart4 } from "react-bootstrap-icons";


export const CartWidget = ({quantity}) => {
    return (
        <div>
            <Cart4 size={30}/>
        </div>
    );
};

export default CartWidget;