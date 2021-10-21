import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { useCartContext } from "../cartContext/cartContext";
import { getFirestore } from "../services/getFirebase";
import BeatLoader from "react-spinners/BeatLoader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { loading, setLoading } = useCartContext();
  const { idCategory } = useParams();
  useEffect(() => {

    if (idCategory) {
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

  return (
  <>
    {
      loading
            ?
            <Container style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '20%'}}>
              <BeatLoader loading={loading} size={12} />
            </Container>
            :
        <Container>
              <Row>
                <Col className="mt-3">
                  <ItemList productos={productos} />
                </Col>
              </Row>
        </Container>
      }
    </>
  );
};

export default ItemListContainer;
