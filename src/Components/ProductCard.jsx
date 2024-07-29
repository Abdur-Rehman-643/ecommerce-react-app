import React from "react";

export default function ProductCard({ product }) {
  const { title, price, description, image, rating } = product;

  const stars = "⭐".repeat(Math.floor(rating.rate));

  return (
    <div className="card">
      <center>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", width: "200px" }}
        />
      </center>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            color: "#100F3D",
            fontFamily: "bahnschrift",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </h5>
        <div style={{ textAlign: "center", marginTop: "-10px" }}>{stars}</div>
        <h5
          style={{
            color: "#F57224",
            textAlign: "center",
            fontFamily: "bahnschrift",
            fontWeight: "bold",
          }}
        >
          Rs. {price}
        </h5>
        <p
          className="card-text"
          style={{ fontFamily: "bahnschrift", textAlign: "justify" }}
        >
          {description}
        </p>
        <center>
          <button
            className="btn btn-outline-light"
            style={{
              fontFamily: "bahnschrift",
              color: "white",
              backgroundColor: "#F57224",
            }}
          >
            Buy Now
          </button>
        </center>
      </div>
    </div>
  );
}
