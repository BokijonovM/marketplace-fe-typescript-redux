import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { Product } from "../../types/index";
import SingleProduct from "./SingleProduct";
import MyCarousel from "./MyFirstPage";

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
      <div>
        <MyCarousel />
      </div>
      <Container fluid>
        {/* <div className="my-3">
          <h4 className="mb-0">New Products</h4>
        </div> */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Latest Products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product
              .slice(0, 8)
              .reverse()
              .map((pro) => {
                return <SingleProduct pro={pro} key={pro._id} />;
              })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MyMain;
{
  /* <Row xs={1} md={2} lg={4} className="g-4 my-3 row__posters">
  {product.map((pro) => {
    return <SingleProduct pro={pro} key={pro._id} />;
  })}
</Row>; */
}
