import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);

    const addCounter = () => {
      if (stock > counter) {
        setCounter(counter + 1)
        return counter;
      } else {
        return null;
      }
    }

    const reduceCounter = () => {
      if (counter <= stock && counter >= initial ) {
        console.log(counter)
        setCounter(counter - 1)
        return counter;
      } else {
        return null;
      }
    }

    return (
      <>
        <Container className="d-flex m-0 p-0 justify-content-between">
            <Button variant="primary" onClick={() => reduceCounter()}>-</Button>
            <Container className="d-flex m-0 p-0 justify-content-center">{counter}</Container>
            <Button variant="primary" onClick={() => addCounter()}>+</Button>
        </Container>
        <Container className="d-flex mt-3 p-0 justify-content-center">
            <Button variant="primary" size="sm" onClick={() => alert('Click Buy!') }>Buy</Button>
        </Container>

        </>
    );
};

export default ItemCount;