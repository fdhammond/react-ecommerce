import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { getFirestore } from "../services/getFirebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemDetail from "./ItemDetail";
import { products } from "./ItemList";


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idDetail } = useParams();

  // const getData = () =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });
  useEffect(() => {

  if (idDetail) {
      //itemDetailContainer
  const dbquery = getFirestore()
  dbquery.collection('items').where('categoryId', '==', idDetail).get()
    .then(res => setProductos({ id: productos.id, ...productos.data() }))
    .catch(err => console.log(err))
    .finally(() => console.log('loading'))

} else {
      //itemDetailContainer
  const dbquery = getFirestore()
  dbquery.collection('items').doc(idDetail).get()
    .then(res => setProductos({ id: productos.id, ...productos.data() }))
    .catch(err => console.log(err))
    .finally(() => console.log('loading'))
  }
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
