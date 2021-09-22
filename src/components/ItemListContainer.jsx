import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { products } from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  const getData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

  console.log(idCategory);

  useEffect(() => {
    getData()
      .then((result) => {
        console.log("test111111111111111", result);
        if (idCategory) {
          const filterCategory = result.filter(
            (item) => item.category.toLowerCase() === idCategory
          );

          console.log("test3", setProductos(filterCategory));
          setProductos(filterCategory);
        } else {
          setProductos(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idCategory]);

  return (
    <Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <ItemList productos={productos} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ItemListContainer;
