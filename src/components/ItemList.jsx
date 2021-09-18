import React, {useState, useEffect} from 'react';
import Item from '../components/Item'
import Container from 'react-bootstrap/Container'

let products = [
    {id: 1, name: 'guitar-1', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247467/react-ecommerce/pngfind.com-electric-guitar-png-18298_ikw7he.png', price: '1500', description: 'Breve DESCRIPCION del producto', stock: 5 },
    {id: 2, name: 'guitar-2', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247451/react-ecommerce/pngfind.com-electric-guitar-png-19026_xmr065.png', price: '500', description: 'Breve descripcion del producto', stock: 5},
    {id: 3, name: 'guitar-3', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247449/react-ecommerce/pngfind.com-guitar-png-1034724_ggylpi.png', price: '1200', description: 'Breve RESUMEN del producto', stock: 5},
    {id: 4, name: 'guitar-4', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247446/react-ecommerce/pngfind.com-guitar-png-597285_df9dfp.png', price: '1000', description: 'Breve descripcion del producto', stock: 5},
    {id: 5, name: 'guitar-5', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247444/react-ecommerce/pngfind.com-electric-guitar-png-18428_roynvz.png', price: '5000', description: 'Breve descripcion del producto', stock: 5 },
    {id: 6, name: 'guitar-6', category: 'electric', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631475156/react-ecommerce/152621-guitar-photos-black-rock-free-download-png-hq_drkiio.png', price: '3000', description: 'Breve descripcion del producto', stock: 5 },
    {id: 7, name: 'guitar-7', category: 'acoustic', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631759203/react-ecommerce/acustic4_jl1agk.png', price: '3200', description: 'Breve descripcion del producto', stock: 5 },
    {id: 8, name: 'guitar-8', category: 'acoustic', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631759194/react-ecommerce/acustic3_jpoe6s.png', price: '1200', description: 'Breve descripcion del producto', stock: 5 },
    {id: 9, name: 'guitar-9', category: 'acoustic', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631759180/react-ecommerce/acustic1_qsz49i.png', price: '5400', description: 'Breve descripcion del producto', stock: 5 },
    {id: 10, name: 'guitar-10', category: 'acoustic', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631759012/react-ecommerce/acustic2_zeie1f.png', price: '2300', description: 'Breve descripcion del producto', stock: 5 },
]

const getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
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
        {items.map(productos =>
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