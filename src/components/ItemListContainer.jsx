import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { getFirestore } from "../services/getFirebase";
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {

    if (idCategory) {
      console.log('idCategory:', idCategory)
      const dbquery = getFirestore()
      dbquery.collection('items').where('categoryId', '==', idCategory).get()
        .then(res => {
          setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() })))
        })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

    } else {
      const dbquery = getFirestore()
      dbquery.collection('items').get()
        .then(res => {
          setProductos( res.docs.map(producto => ({ id: producto.id, ...producto.data() })))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }
  }, [idCategory]);


  console.log('productos', productos)

  return (
    <Container>
      <Container>

            {
              loading
            ?
            <Row style={{ margin: "0 auto" }}>
              <RingLoader loading={loading} size={150} />
            </Row>
            :
              <Row>
                <Col className="mt-3">
                  <ItemList productos={productos} />
                </Col>
              </Row>
            }


      </Container>
    </Container>
  );
};

export default ItemListContainer;
