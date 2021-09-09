import React from 'react';
import Item from '../components/Item'

const ItemList = () => {

    let data = [
        {id: 1, name: 'guitar-1', image: '../images/thisisfine.png', price: '1500USD', description: 'Breve descripcion del producto', stock: 5 },
        {id: 2, name: 'guitar-2', image: '../images/thisisfine.png', price: '500USD', description: 'Breve descripcion del producto', stock: 5},
        {id: 3, name: 'guitar-3', image: '../images/thisisfine.png', price: '1200USD', description: 'Breve descripcion del producto', stock: 5},
        {id: 4, name: 'guitar-4', image: '../images/thisisfine.png', price: '1000USD', description: 'Breve descripcion del producto', stock: 5},
        {id: 5, name: 'guitar-5', image: '../images/thisisfine.png', price: '000USD', description: 'Breve descripcion del producto', stock: 5}
    ]

    const { id, name, image, price, description, stock } = data;

    return (
        <div>
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
        </div>
    );
};

export default ItemList;