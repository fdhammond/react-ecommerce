import React, { useState, useEffect } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import products from "./ItemList";

const ItemListContainer = ({ item }) => {
  return (
    <Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <ItemList item={item} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ItemListContainer;
