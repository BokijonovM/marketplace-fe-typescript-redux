import React from "react";
import { Col, Card } from "react-bootstrap";
import { Product } from "../../types/index";
import "../style/main.css";
import { useNavigate } from "react-router-dom";

interface ProductDetails {
  pro: Product;
}

function SingleProduct({ pro }: ProductDetails) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={pro._id}
        className="group relative"
        onClick={() => navigate(`/details/${pro._id}`)}
      >
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={pro.imageUrl}
            alt={pro.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h5 className="text-sm text-gray-700 product-name-span">
              <span className="mb-n2">
                <span aria-hidden="true" className="absolute inset-0" />
                {pro.name.slice(0, 18)}
              </span>
            </h5>
            <p className="mt-1 text-sm text-gray-500">{pro.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${pro.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
