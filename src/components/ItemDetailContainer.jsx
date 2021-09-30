import React, { useState, useEffect } from "react";
import {useParams} from 'react-router'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemDetail from "./ItemDetail";
import { products } from "./ItemList";


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idDetail } = useParams();

  const getData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

  useEffect(() => {
    getData()
      .then((result) => {
          const filterId = result.filter((item) => item.id == idDetail)
        setProductos(...filterId)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Container>
        <Row>
          <Col className="mt-3">
            <ItemDetail productos={productos}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ItemDetailContainer;
