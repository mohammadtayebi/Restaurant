import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Timeline, Tween } from "react-gsap";
import "./Nav.css";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logos">
        <h2 className="navText">Tayebi</h2>
      </div>
      {/* this for the animation part in mobile devices  */}
      <ul className={nav ? "Nav-itemss active" : "Nav-itemss"}>
        <li>
          <Link className="navText" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navText" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navText" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="navText" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="navText" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="reservation">
        <p>
          <span className="reserve">Reservation</span>{" "}
          <i className="fas fa-phone text-white"></i>{" "}
          <span className="text-white">09214934966</span>
        </p>
      </div>
      {/* ?when we click on this the animation starts  */}
      <div className="bars" onClick={() => setNav(!nav)}>
        <i className="fas fa-bars text-white"></i>
      </div>
    </div>
  );
};

export default Nav;
