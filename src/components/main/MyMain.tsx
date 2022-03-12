import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Product } from "../../types/index";
import SingleProduct from "./SingleProduct";

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
        <Row xs={1} md={2} lg={4} className="g-4 my-3">
          {product.map((pro) => {
            return <SingleProduct pro={pro} key={pro._id} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MyMain;
