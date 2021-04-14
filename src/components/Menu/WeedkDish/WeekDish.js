import React from "react";
import { useMenuContext } from "../../../Contex/menu-context";
import "./WeekDish.css";

const WeekDish = () => {
  const { random_meal } = useMenuContext();
  return (
    <section className="week-dish">
      <div className="container">
        <div className="row">
          {/* this part is going to be empty  */}
          <div className="col-lg-6 col-sm-0"></div>
          {/* here we put the dish of the week  */}
          {random_meal.map((item) => {
            const {
              idMeal,
              strMeal,
              strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
            } = item;
            return (
              <div
                key={idMeal}
                className="col-lg-6 week-dish-info"
                style={{ margin: "4rem 0" }}
              >
                <i
                  className="fas fa-concierge-bell text-muted"
                  style={{ fontSize: "3.5rem" }}
                ></i>
                <h1 className="font-weight-bold my-4 week-dish-head">
                  This week’s dish
                </h1>
                <p
                  className="text-muted font-italic mb-3"
                  style={{ fontSize: "18px" }}
                >
                  {strMeal}
                </p>
                <div className="week-menu-item my-4">
                  <p>
                    with {strIngredient1},{strIngredient2},{strIngredient3},
                    {strIngredient4}
                  </p>
                  <div className="week-menu-price">$9.00</div>
                </div>
                <p
                  className="text-muted my-5 font"
                  style={{ fontSize: "16px" }}
                >
                  {strInstructions}
                </p>
                <p className="text-muted" style={{ fontSize: "16px" }}>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat. Stpat sem. Vivamus rutrum dui fermentum eros
                  hendrerit.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeekDish;
