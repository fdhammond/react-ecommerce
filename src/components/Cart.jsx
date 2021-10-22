import React from 'react';
import { useCartContext } from "../cartContext/cartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardImg from "react-bootstrap/CardImg";
import TrashIcon from "./TrashIcon";
import {
  Link
} from "react-router-dom";

const Cart = () => {
  const { cartList, deleteFromCart, deleteList, totalPrice } = useCartContext()
  return (
    <>
    <Container
      className="d-flex mt-4 p-0 justify-content-center"
        style={{ width: "100%" }}>
        <Row>
      {cartList.map(item =>
        <Card
        key={item.productos.id}
        className="m-3 p-0"
        style={{
          maxWidth: "350px",
          height: "auto",
          borderRadius: "14px",
          backgroundColor: "#f8f9fa",
          borderColor: "white",
        }}>
        <Card.Body className="d-flex justify-content-center">
          <CardImg
            variant="top"
            src={item.productos.image}
            style={{ width: "50%", height: "auto" }}
          />
        </Card.Body>
        <Card.Body
          className="sampleStyle"
          style={{ width: "100%", height: "auto" }}>
          <Card.Title className="mb-3 d-flex justify-content-center">
            {item.productos.name}
          </Card.Title>
          <Card.Text className="d-flex justify-content-center" style={{ textAlign: 'center' }}>
              {item.productos.description}
          </Card.Text>
          <Card.Body className="d-flex justify-content-center">
              <h6>{'Quantity: ' + item.quantity}</h6>
          </Card.Body>
          <Card.Body className="d-flex justify-content-center">
              <h6>${item.productos.price}</h6>
            </Card.Body>
          <Card.Body className="d-flex justify-content-center">
            <Button
              onClick={() => deleteFromCart(item)}
            >
            <TrashIcon
            />
            </Button>
        </Card.Body>
        </Card.Body>
      </Card>
        )}
        </Row>
        <Row>
          <Container
        className="d-flex m-5 p-0 justify-content-center"
          >
            <Row>
              {
                totalPrice(cartList) > 0 ? <div><h2>Total Price: ${totalPrice(cartList)}</h2><Button onClick={() => deleteList()}>Empty cart</Button></div>
                  :
                <div><h2>You dont have products on cart!</h2> <Link to="/products"><Button variant="warning">Go back to Products</Button></Link></div>
              }
            </Row>
      </Container>
        </Row>
      </Container>

    </>
  );
};

export default Cart;
