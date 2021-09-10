import React from 'react';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = () => {

    let data = [
        {id: 1, name: 'guitar-1', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1500USD', description: 'Breve DESCRIPCION del producto', stock: 5 },
        {id: 2, name: 'guitar-2', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '500USD', description: 'Breve descripcion del producto', stock: 5},
        {id: 3, name: 'guitar-3', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1200USD', description: 'Breve RESUMEN del producto', stock: 5},
        {id: 4, name: 'guitar-4', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1000USD', description: 'Breve descripcion del producto', stock: 5},
        {id: 5, name: 'guitar-5', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '000USD', description: 'Breve descripcion del producto', stock: 5 },
        {id: 6, name: 'guitar-5', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '000USD', description: 'Breve descripcion del producto', stock: 5}

    ]

    return (
        <>
            <Container className="d-flex m-0 p-0">
            {data.map(productos =>
        <Container className="d-flex">
            <Row>
            <Item
            key={productos.id}
            name={productos.name}
            image={productos.image}
            price={productos.price}
            description={productos.description}
            stock={productos.stock}
            />
            </Row>
        </Container>
    )}
            </Container>
        </>
    );
};

export default ItemList;