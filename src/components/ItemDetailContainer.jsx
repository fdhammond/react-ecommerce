import React from "react";

const ItemDetailContainer = () => {
  return (
    <Container>
      <Container>
        <Row className="mt-3">
          <h1>{greeting}</h1>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <Item />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ItemDetailContainer;
