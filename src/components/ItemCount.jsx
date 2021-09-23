import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useContext} from 'react-router-dom'
import {useCartContext} from "../cartContext/cartContext";


const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const { addToCart } = useCartContext();

  const addProduct=(cant)=>{
    // console.log(cant)
    // addToCart({item: item, cantidad: cant })
}


  const addCounter = () => {
    if (stock > counter) {
      setCounter(counter + 1);
      return counter;
    } else {
      return null;
    }
  };

  const reduceCounter = () => {
    if (counter <= stock && counter >= initial) {
      console.log(counter);
      setCounter(counter - 1);
      return counter;
    } else {
      return null;
    }
  };

  return (
    <>
      <Container className="d-flex m-0 p-0 justify-content-between">
        <Button
          onClick={() => reduceCounter()}
          className="rounded-circle nav-warning--color"
          variant="warning"
          style={{ color: "white" }}>
          -
        </Button>
        <Container className="d-flex m-0 p-0 justify-content-center">
          {counter}
        </Container>
        <Button
          onClick={() => addCounter()}
          className="rounded-circle nav-warning--color"
          variant="warning"
          style={{ color: "white" }}>
          +
        </Button>
      </Container>
      <Container className="d-flex mt-3 p-0 justify-content-center">
        <Button
        onClick={addProduct}
        >
          Buy</Button>
      </Container>
    </>
  );
};

export default ItemCount;
