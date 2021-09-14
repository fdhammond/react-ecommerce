import React, {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let data = [
    {id: 1, name: 'guitar-1', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247467/react-ecommerce/pngfind.com-electric-guitar-png-18298_ikw7he.png', price: '1500', description: 'Breve DESCRIPCION del producto', stock: 5 },
    {id: 2, name: 'guitar-2', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247451/react-ecommerce/pngfind.com-electric-guitar-png-19026_xmr065.png', price: '500', description: 'Breve descripcion del producto', stock: 5},
    {id: 3, name: 'guitar-3', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247449/react-ecommerce/pngfind.com-guitar-png-1034724_ggylpi.png', price: '1200', description: 'Breve RESUMEN del producto', stock: 5},
    {id: 4, name: 'guitar-4', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247446/react-ecommerce/pngfind.com-guitar-png-597285_df9dfp.png', price: '1000', description: 'Breve descripcion del producto', stock: 5},
    {id: 5, name: 'guitar-5', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631247444/react-ecommerce/pngfind.com-electric-guitar-png-18428_roynvz.png', price: '5000', description: 'Breve descripcion del producto', stock: 5 },
    {id: 6, name: 'guitar-6', image: 'https://res.cloudinary.com/dzkqopnby/image/upload/v1631475156/react-ecommerce/152621-guitar-photos-black-rock-free-download-png-hq_drkiio.png', price: '3000', description: 'Breve descripcion del producto', stock: 5 },
]

const getData = () => new Promise((resolve, reject) => {
    let response = '200'
    response
    ?
    setTimeout(() => {
        resolve(data)
    }, 2000)
    :
    reject('error 404')
})

const ItemDetailContainer = () => {

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
        <Container>
            <Container>
            <Row>
                    <Col className="mt-3">
                        {data.map(productos =>
                        <ItemDetail
                        description={productos.description}
                        />
                        )}
                    </Col>
            </Row>
            </Container>


    </Container>
    );
};

export default ItemDetailContainer;