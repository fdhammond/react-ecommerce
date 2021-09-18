import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'


const getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000)
})

const ItemDetail = () => {

    return (
        <>
        <Container className="d-flex m-0 p-0 justify-content-center" style={{ width: '100%', flexWrap: 'wrap'}}>
            
        </Container>

        </>
    );
};

export default ItemDetail;