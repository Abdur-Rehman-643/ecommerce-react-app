import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductsPage from "./ProductsPage";

export default function Product() {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#fff",
        }}
      >
        <ProductsPage name="Our Recent Products" />
        <Footer />
      </div>
    </React.Fragment>
  );
}
