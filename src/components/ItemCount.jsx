import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {
  Link
} from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [changeButton, setChangeButton] = useState(false);

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
      setCounter(counter - 1);
      return counter;
    } else {
      return null;
    }
  };

  const addToCart = () => {
    onAdd(counter)
    setChangeButton(true)
  }


  return (
    <>
      <Container className="d-flex m-0 p-0 justify-content-between">
      {
          !changeButton
            ?
            <>
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
          </>
            :
          null
      }
      </Container>
      <Container className="d-flex mt-3 p-0 justify-content-center">
        {
          !changeButton ? <Button className="dark--color" onClick={() => addToCart()}>Buy</Button>
          :
          <div>
          <Container style={{ textAlign: "center" }}>
          <Link to="/cart">
            <Button className="dark--color">Go Cart</Button>
          </Link>
          <Link to="/products">
          <Button className="dark--color">Keep Shopping</Button>
          </Link>
          </Container>
          </div>
        }
      </Container>
    </>
  );
};

export default ItemCount;
