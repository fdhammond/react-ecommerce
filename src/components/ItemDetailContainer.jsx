import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ items }) => {
  return (
    <Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <ItemDetail items={items} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ItemDetailContainer;
