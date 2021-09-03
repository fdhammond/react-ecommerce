import Cards from "./Cards";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const ItemListContainer = ({greeting, stock, initial}) => {
    return (
        <Container>
            <Container className="mt-3">
                <h1>{ greeting }</h1>
            </Container>
            <Row className="mt-4">
                <Col><Cards stock={stock} initial={initial} /></Col>
                <Col><Cards stock={stock} initial={initial} /></Col>
                <Col><Cards stock={stock} initial={initial} /></Col>
            </Row>


    </Container>
    );
};

export default ItemListContainer;