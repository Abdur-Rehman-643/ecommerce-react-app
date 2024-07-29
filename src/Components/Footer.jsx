import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small"
      style={{ backgroundColor: "#0F0D3D", color: "white" }}
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5
              className="text-uppercase"
              style={{ marginTop: "40px", fontFamily: "bahnschrift" }}
            >
              E-Commerce Store
            </h5>
            <p style={{ fontFamily: "bahnschrift" }}>
              At Our Ecommerce Store, we are passionate about providing
              exceptional products and an unparalleled shopping experience. We
              strive to offer a curated selection of high-quality items that
              meet the diverse needs and tastes of our valued customers.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5
              className="text-uppercase"
              style={{ marginTop: "40px", fontFamily: "bahnschrift" }}
            >
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase" style={{ marginTop: "40px" }}>
              Social Media
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "bahnschrift",
                  }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2024 Copyright:
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          &nbsp;&nbsp;ecommerce-store.com
        </Link>
      </div>
    </footer>
  );
}
