import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#100F3D" }}
    >
      <div className="container-fluid">
        <img
          src="/images/cart.png"
          alt="E-Commerce"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "bahnschrift",
          }}
        >
          E-Commerce Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contactus"
                style={{ color: "white", fontFamily: "bahnschrift" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link className="nav-link" to="/signup">
            <button
              className="btn btn-outline-light"
              style={{
                fontFamily: "bahnschrift",
                marginRight: "10px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Register
            </button>
          </Link>
          <Link className="nav-link" to="/login">
            <button
              className="btn btn-outline-light"
              style={{
                fontFamily: "bahnschrift",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
