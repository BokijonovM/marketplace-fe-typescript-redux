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
      <div key={pro._id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={pro.imageUrl}
            alt={pro.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <h5 className="mb-n2">
                <span aria-hidden="true" className="absolute inset-0" />
                {pro.name}
              </h5>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{pro.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${pro.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
