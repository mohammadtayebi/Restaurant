import React from "react";
import "./Filter.css";
import FilterComponent from "./FilterComponent/FilterComponent";
import Products from "./Products/Products";

const Filter = () => {
  return (
    <section>
      <div className="container">
        <div className="row" style={{ direction: "rtl" }}>
          <div className="col-xl-3 col-lg-3 col-md-6 m-sm-auto m-lg-0">
            <FilterComponent />
          </div>
          <div className="col-xl-9 col-lg-9  h-100">
            <Products />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
