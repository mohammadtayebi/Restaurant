import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container my-5">
        <div className="row">
          {/* docial media part  */}
          <div className="col-md-4 text-justify">
            <p className="footer-header">Social media</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus dolor temporibus ducimus reprehenderit rem earum .
            </p>
            <div className="d-flex">
              <i className="fab fa-telegram px-1 footer-social"></i>
              <i className="fab fa-instagram px-1 footer-social"></i>
              <i className="fab fa-whatsapp px-1 footer-social"></i>
              <i className="fab fa-linkedin px-1 footer-social"></i>
            </div>
          </div>
          {/* Quick links part  */}
          <div className="col-md-4 d-flex align-items-center flex-column footer-quick">
            <p className="footer-header">Quick Links</p>
            <Link to="/" className="py-1">
              Home
            </Link>
            <Link to="/about" className="py-1">
              About
            </Link>
            <Link to="/menu" className="py-1">
              Menu
            </Link>
            <Link to="/blog" className="py-1">
              Blog
            </Link>
            <Link to="/contact" className="py-1">
              Contact
            </Link>
          </div>
          {/* Question Part  */}
          <div className="col-md-4">
            <p className="footer-header">Have a question</p>
            <div className="footer-contact">
              <i className="fas fa-map-marker-alt"></i>
              <p>Tehran,Tehran no,khaghani,mantaghe 13</p>
            </div>
            <div className="footer-contact">
              {" "}
              <i className="fas fa-phone"></i>
              <p>0921-493-49-66</p>
            </div>
            <div className="footer-contact">
              <i className="fab fa-telegram-plane"></i>

              <p>tayebi923@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
