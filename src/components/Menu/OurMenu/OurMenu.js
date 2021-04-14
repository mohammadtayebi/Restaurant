import React from "react";
import { useMenuContext } from "../../../Contex/menu-context";
import DayMenu from "./DayMenu";
import "./OurMenu.css";

const OurMenu = () => {
  const { getTheValue } = useMenuContext();
  return (
    <section>
      {/* the introduction part  */}
      <div className="text-center d-flex flex-column align-items-center">
        <i className="fas fa-concierge-bell welcom-icon text-muted mb-4"></i>
        <h1 className="welcome-text text-center font-weight-bolder">
          Our Menu
        </h1>
      </div>
      {/* the part that we chose the meal of the day  */}
      <div
        className="container"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
      >
        <div className="row">
          {/* brackfast  */}
          <div className="col-sm-6 col-lg-3">
            <div className="meal">
              <i className="fas fa-mug-hot "></i>
              <div className="meal-text">
                <button
                  className="meal-text-head mb-0 btn"
                  style={{ color: "#ffc515", fontSize: "1.25rem" }}
                  value="Breakfast"
                  onClick={getTheValue}
                >
                  Breakfast
                </button>
                <p>Weekdays 8:30 a.m - 11:30 a.m</p>
              </div>
            </div>
          </div>

          {/* main course  */}
          <div className="col-sm-6 col-lg-3 ">
            <div className="meal">
              <i className="fas fa-hamburger service-icon"></i>
              <div className="meal-text">
                <button
                  className="meal-text-head mb-0 btn"
                  style={{ color: "#ffc515", fontSize: "1.25rem" }}
                  value="Chicken"
                  onClick={getTheValue}
                >
                  main course
                </button>
                <p>Weekdays 8:30 a.m - 11:30 a.m</p>
              </div>
            </div>
          </div>
          {/* vegeterian & vegan  */}
          <div className="col-sm-6 col-lg-3 ">
            <div className="meal">
              <i className="fas fa-pizza-slice service-icon"></i>
              <div className="meal-text">
                <button
                  className="meal-text-head mb-0 btn"
                  style={{ color: "#ffc515", fontSize: "1.25rem" }}
                  value="Vegetarian"
                  onClick={getTheValue}
                >
                  Vegeterian
                </button>
                <p>Weekdays 8:30 a.m - 11:30 a.m</p>
              </div>
            </div>
          </div>

          {/* brunch */}
          <div className="col-sm-6 col-lg-3 ">
            <div className="meal">
              <i className="fas fa-birthday-cake"></i>
              <div className="meal-text">
                <button
                  className="meal-text-head mb-0 btn"
                  style={{ color: "#ffc515", fontSize: "1.25rem" }}
                  value="Dessert"
                  onClick={getTheValue}
                >
                  Dessert
                </button>
                <p>Weekdays 8:30 a.m - 11:30 a.m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* showing the menu  */}
      <DayMenu />
      <br />
    </section>
  );
};

export default OurMenu;
