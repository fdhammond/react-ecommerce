import React, {useState} from 'react';
import Item from "./Item";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemListContainer = ({ greeting, stock, initial }) => {

    return (
        <Container className="m-0">
            <Container className="mt-3">
                <h1>{ greeting }</h1>
            </Container>
            <Container>
            <Row>
                <Col className="mt-3"><ItemList /></Col>
            </Row>
            </Container>


    </Container>
    );
};

export default ItemListContainer;