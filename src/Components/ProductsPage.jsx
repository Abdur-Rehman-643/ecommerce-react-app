import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function ProductsPage(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const productChunks = chunkArray(products, 4);

  return (
    <React.Fragment>
      <div>
        <h2
          style={{
            fontFamily: "bahnschrift",
            color: "#100F3D",
            marginTop: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </h2>
        {productChunks.map((chunk, index) => (
          <ProductList key={index} products={chunk} />
        ))}
      </div>
    </React.Fragment>
  );
}
