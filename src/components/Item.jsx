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
<Container>
<Row>
<Col>
    <CardGroup style={{ width: '14rem', height: '100%'}} className="d-flex">
    <Card className="m-0 p-0">
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
    </CardGroup>
</Col>
</Row>
</Container>
    </>
    );
};

export default Item;