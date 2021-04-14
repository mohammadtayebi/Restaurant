import React from "react";
import { useMenuContext } from "../../../Contex/menu-context";
import menu_reducer from "../../../Reducer/menu-reducer";

const DayMenu = () => {
  const { meal } = useMenuContext();
  return (
    <div className="container">
      <div className="row">
        {/* putting evry meal that we have here */}
        {/* we need to map here  */}
        {meal.slice(0, 6).map((item) => {
          const { idMeal, strMeal } = item;
          return (
            <div className="col-md-6 my-1" key={idMeal}>
              <h5 className="" style={{ color: "#7e7e7e" }}>
                {strMeal}
              </h5>
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
    </div>
  );
};

export default DayMenu;
