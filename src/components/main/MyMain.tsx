import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Product } from "../../types/index";

function MyMain() {
  const [product, setProduct] = useState<Product[]>([]);
  const fetchProduct = async () => {
    try {
      let res = await fetch(process.env.REACT_APP_API + "product");
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className="my-2">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MyMain;
