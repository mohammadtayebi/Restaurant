import React from "react";
import { Link } from "react-router-dom";
import { useMenuContext } from "../../../Contex/menu-context";

import "./Menu.css";

const Menu = () => {
  const { getTheValue, meal } = useMenuContext();
  return (
    <section className="home-menu">
      {/* the intro section */}
      <div className="text-center d-flex flex-column align-items-center menu-home-intro">
        <i className="fas fa-concierge-bell menu-home-icon text-white"></i>
        <h1 className="menu-home-text text-center font-weight-bolder text-white">
          Menu
        </h1>
      </div>
      <div className="container">
        {/* the part that we put the food time  */}
        <div className="d-flex align-items-center justify-content-center my-5">
          <button
            className="text-white mx-5 btn"
            value="Breakfast"
            onClick={getTheValue}
          >
            Breakfast
          </button>
          <button
            className="text-white mx-5 btn"
            value="Chicken"
            onClick={getTheValue}
          >
            main course
          </button>
          <button
            className="text-white mx-5 btn"
            value="Vegetarian"
            onClick={getTheValue}
          >
            vegeterian
          </button>
          <button
            className="text-white mx-5 btn"
            value="Dessert"
            onClick={getTheValue}
          >
            Dessert
          </button>
        </div>
        <div className="row">
          {/* putting evry meal that we have here */}
          {/* we need to map here  */}
          {meal.slice(0, 6).map((item) => {
            const { idMeal, strMeal } = item;
            return (
              <div className="col-md-6 my-1" key={idMeal}>
                <h5 className="text-white">{strMeal}</h5>
                <div className="d-flex justify-content-between my-2">
                  <p
                    className="text-muted"
                    style={{ fontSize: "13px", color: "#7e7e7e" }}
                  >
                    {strMeal}
                  </p>
                  <p
                    className="text-muted"
                    style={{ fontSize: "13px", color: "#7e7e7e" }}
                  >
                    $9.00
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* the botton to take us to menu page */}
        <div className="w-100 text-center">
          <Link to="/menu" className="home-menu-button">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
