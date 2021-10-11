import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { getFirestore } from "../services/getFirebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  // const getData = () =>
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 2000);
  //   });


  useEffect(() => {

    const dbquery = getFirestore()
    dbquery.collection('items').get()
      .then(res => {
        setProductos( res.docs.map(producto => ({ id: producto.id, ...producto.data() })) )
      })
      .catch(err => console.log(err))
      .finally(() => console.log('loading'))

      // getData()
      //   .then((result) => {
      //     if (idCategory) {
      //       const filterCategory = result.filter(
      //         (item) => item.category.toLowerCase() === idCategory
      //       );

      //       setProductos(filterCategory);
      //     } else {
      //       setProductos(result);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      }, [idCategory]);


      console.log(productos)


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
