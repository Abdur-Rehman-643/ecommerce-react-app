import React from "react";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage";
import Footer from "./Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          src="/images/Image1.jpg"
          alt="Image1"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#fff",
        }}
      >
        <ProductsPage name="Previous Products" />
        <Footer />
      </div>
    </React.Fragment>
  );
}
