import React from "react";
import { useMenuContext } from "../../../Contex/menu-context";
import "./SideMenu.css";

const SideMenu = () => {
  const { miscellaneous } = useMenuContext();
  return (
    <section style={{ height: "710px" }}>
      <div className="side-menu">
        {/* the intro part  */}
        <div
          className="text-center d-flex flex-column align-items-center"
          style={{ padding: "5rem 0" }}
        >
          <i className="fas fa-apple-alt welcom-icon text-white mb-4"></i>
          <h1 className="welcome-text text-center font-weight-bolder text-white">
            Vegeterian menu
          </h1>
        </div>
        <div className="container" style={{ padding: "5rem 0.5rem 7rem" }}>
          <div className="row">
            {/* putting evry meal that we have here */}
            {/* we need to map here  */}
            {miscellaneous.slice(0, 6).map((meal) => {
              const { idMeal, strMeal } = meal;
              return (
                <div className="col-md-6 my-2" key={idMeal}>
                  <h5 className="text-white">{strMeal}</h5>
                  <div className="d-flex justify-content-between my-2">
                    <p className="text-muted" style={{ fontSize: "13px" }}>
                      {strMeal}
                    </p>
                    <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-md-6 my-2">
              <h5 className="text-white">some food name here</h5>
              <div className="d-flex justify-content-between my-2">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  some food ingrediant here
                </p>
                <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <h5 className="text-white">some food name here</h5>
              <div className="d-flex justify-content-between my-2">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  some food ingrediant here
                </p>
                <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <h5 className="text-white">some food name here</h5>
              <div className="d-flex justify-content-between my-2">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  some food ingrediant here
                </p>
                <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <h5 className="text-white">some food name here</h5>
              <div className="d-flex justify-content-between my-2">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  some food ingrediant here
                </p>
                <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <h5 className="text-white">some food name here</h5>
              <div className="d-flex justify-content-between my-2">
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  some food ingrediant here
                </p>
                <p style={{ fontSize: "17px", color: "#fff" }}>$9.00</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
