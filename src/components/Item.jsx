import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardImg from 'react-bootstrap/CardImg'
import ItemCount from './ItemCount'
import '../App.css'

const Item = ({name, image, price, description, stock}) => {

  return (
    <>

    <Card className="m-3 p-0" style={{ width: '14rem', height: '100%'}}>
        <CardImg variant="top" src={image} />
        <Card.Body className="sampleStyle">
          <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Body className="d-flex justify-content-center">
            <h2>${price}</h2>
            </Card.Body>
            <Card.Body>
                <ItemCount
                  stock={stock}
                  initial={1}
                />
            </Card.Body>
        </Card.Body>
    </Card>
    </>
    );
};

export default Item;