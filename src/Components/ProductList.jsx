import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ margin: "40px" }}
    >
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
