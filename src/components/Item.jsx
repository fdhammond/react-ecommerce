import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import ItemCount from './ItemCount'
import '../App.css'

const Item = ({name, image, price, description, stock}) => {

  return (
    <>

    <Card className="m-3 p-0" style={{ width: '15rem', height: 'auto', borderRadius: '14px', backgroundColor: "#f8f9fa", borderColor: "white"}}>
        <Card.Body className="d-flex justify-content-center">
        <CardImg
          variant="top"
          src={image}
          style={{ width: '50%', height: 'auto'}}
        />
        </Card.Body>

        <Card.Body className="sampleStyle" style={{ width: '100%', height: 'auto'}}>
          <Card.Title className="d-flex justify-content-center">{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Body className="d-flex justify-content-center">
            <h6>${price}</h6>
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