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
            className="card-img-single"
            variant="top"
            src={pro.imageUrl}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default SingleProduct;
