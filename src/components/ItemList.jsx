import React, {useState, useEffect} from 'react';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'

let data = [
    {id: 1, name: 'guitar-1', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1500', description: 'Breve DESCRIPCION del producto', stock: 5 },
    {id: 2, name: 'guitar-2', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '500', description: 'Breve descripcion del producto', stock: 5},
    {id: 3, name: 'guitar-3', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1200', description: 'Breve RESUMEN del producto', stock: 5},
    {id: 4, name: 'guitar-4', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '1000', description: 'Breve descripcion del producto', stock: 5},
    {id: 5, name: 'guitar-5', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '5000', description: 'Breve descripcion del producto', stock: 5 },
    {id: 6, name: 'guitar-5', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', price: '3000', description: 'Breve descripcion del producto', stock: 5 },
]

const getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000)
})

const ItemList = () => {

    const [items, setItems] = useState([]);

    const fetchData = () => {
        getData()
            .then(result => {
            setItems(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(items)

    return (
        <>
        <Container className="d-flex m-0 p-0 justify-content-center" style={{ width: '100%', flexWrap: 'wrap'}}>
        {data.map(productos =>
            <Item
            key={productos.id}
            name={productos.name}
            image={productos.image}
            price={productos.price}
            description={productos.description}
            stock={productos.stock}
            />
    )}
            </Container>
        </>
    );
};

export default ItemList;