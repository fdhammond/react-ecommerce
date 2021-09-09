import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardImg from 'react-bootstrap/CardImg'
import thisisfine from './../images/thisisfine.png'
import ItemCount from './ItemCount'

const Item = ({id, name, image, price, description, stock}) => {

  return (
    <>
<Container>
<Row>
<Col md="auto">
    <CardGroup style={{ width: '18rem' }}>
    <Card key={id}>
          <CardImg variant="top" src={thisisfine} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
              <Container>
                <ItemCount
                  stock={5}
                  initial={1}
                />
              </Container>
                <Container>
            </Container>
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