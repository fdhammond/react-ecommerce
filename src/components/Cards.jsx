import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import thisisfine from './../images/thisisfine.png'

const Cards = ({ stock, initial }) => {
  const image = "https://static.wikia.nocookie.net/memes-pedia/images/7/74/This_Is_Fine.png/revision/latest/top-crop/width/360/height/450?cb=20170101154622&path-prefix=es"

  const [counter, setCounter] = useState(initial);

  const addCounter = () => {
    if (stock > counter) {
      setCounter(counter + 1)
      return counter;
    } else {
      return null;
    }
  }

  const reduceCounter = () => {
    if (counter <= stock && counter >= initial ) {
      console.log(counter)
      setCounter(counter - 1)
      return counter;
    } else {
      return null;
    }
  }


  return (
    <>
      <Container>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={thisisfine} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Container>
      <Row>
      <Col> <Button variant="primary" onClick={() => reduceCounter()}>-</Button> </Col>

      <Col xs={5}> <Container>{counter}</Container> </Col>

      <Col><Button variant="primary" onClick={() => addCounter()}>+</Button></Col>
      </Row>
    </Container>
    <Container className="mt-2">
    <Row>
      <Button variant="primary" size="sm" onClick={() => alert('Click Buy!') }>Buy</Button>
    </Row>
    </Container>
  </Card.Body>
        </Card>
        </Container>
        </>
    );
};

export default Cards;