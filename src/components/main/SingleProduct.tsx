import React from "react";
import { Col, Card } from "react-bootstrap";
import { Product } from "../../types/index";
import "../style/main.css";

interface ProductDetails {
  pro: Product;
}

function SingleProduct({ pro }: ProductDetails) {
  return (
    <div>
      <Col>
        <Card className="my-2">
          <Card.Img
            className="card-img-single p-2"
            variant="top"
            src={pro.imageUrl}
          />
          <Card.Body>
            <Card.Title>{pro.name}</Card.Title>
            <Card.Text>{pro.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{pro.brand}</small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
}

export default SingleProduct;
