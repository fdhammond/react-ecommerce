import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useCartContext } from "../cartContext/cartContext";
import { getFirestore } from "../services/getFirebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemDetail from "./ItemDetail";
import BeatLoader from "react-spinners/BeatLoader";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const { loading, setLoading } = useCartContext()
  const { idDetail } = useParams();

  useEffect(() => {
  const dbquery = getFirestore()
  dbquery.collection('items').doc(idDetail).get()
    .then(res => {
      setProductos({ id: res.id, ...res.data() })
    })
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
}, [idDetail]);

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
            <ItemDetail productos={productos}/>
          </Col>
        </Row>
      </Container>
    }
  </>
  );
};

export default ItemDetailContainer;
