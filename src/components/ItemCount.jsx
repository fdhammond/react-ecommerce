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
      <Row>
        <Col>
            <Button variant="primary" onClick={() => reduceCounter()}>-</Button>
        </Col>
        <Col xs={5}>
            <Container>{counter}</Container>
        </Col>
        <Col>
            <Button variant="primary" onClick={() => addCounter()}>+</Button>
        </Col>
      </Row>
    <Container className="mt-2">
        <Row>
            <Button variant="primary" size="sm" onClick={() => alert('Click Buy!') }>Buy</Button>
        </Row>
    </Container>
        </>
    );
};

export default ItemCount;