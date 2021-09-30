import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import ItemCount from "./ItemCount";
import "../App.css";
import {useCartContext} from "../cartContext/cartContext";

const ItemDetail = ({ productos }) => {

  const { addToCart } = useCartContext();

  const onAdd = (quant) => {
    addToCart({ productos: productos, quantity: quant })
  }

  return (
    <>
      <Card
        key={productos.id}
        className="m-3 p-0"
        style={{
          width: "15rem",
          height: "auto",
          borderRadius: "14px",
          backgroundColor: "#f8f9fa",
          borderColor: "white",
        }}>
        <Card.Body className="d-flex justify-content-center">
          <CardImg
            variant="top"
            src={productos.image}
            style={{ width: "50%", height: "auto" }}
          />
        </Card.Body>

        <Card.Body
          className="sampleStyle"
          style={{ width: "100%", height: "auto" }}>
          <Card.Title className="d-flex justify-content-center">
            {productos.name}
          </Card.Title>
          <Card.Text>
              {productos.description}
          </Card.Text>
          <Card.Body className="d-flex justify-content-center">
            <h6>${productos.price}</h6>
          </Card.Body>
          <Card.Body>
            <ItemCount stock={productos.stock} initial={1} onAdd={onAdd}/>
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
