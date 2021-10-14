import React from "react";
import Item from "../components/Item";
import Container from "react-bootstrap/Container";

const ItemList = ({ productos }) => {
  return (
    <Container
      className="d-flex m-0 p-0 justify-content-center"
      style={{ width: "100%", flexWrap: "wrap" }}>
      {productos.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          image={prod.image}
          price={prod.price}
          description={prod.description}
          stock={prod.stock}
          category={prod.category}
        />
      ))}
    </Container>
  );
};

export default ItemList;
