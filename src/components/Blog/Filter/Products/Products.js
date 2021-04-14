import React from "react";
import { useBlogContext } from "../../../../Contex/blog-context";
import { Link } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const { foods, foods_loading, foods_error, filter_foods } = useBlogContext();
  if (foods_loading) {
    return (
      <div
        className="spinner-border text-warning d-flex m-auto"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    );
  }
  if (foods_error) {
    <div class="alert alert-warning alert-dismissible fade show w-25 m-auto">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>Error!</strong> Products did not load!
    </div>;
  }
  if (foods) {
    return (
      <div>
        <div className="row">
          {/* here we map  */}
          {foods.map((food) => {
            const {
              idMeal,
              strMeal,
              strMealThumb,
              strCategory,
              strArea,
            } = food;
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={idMeal}>
                <div className="food-item ">
                  <Link to={`/foods/${idMeal}`}>
                    <img className="img-fluid" src={strMealThumb} alt="" />
                  </Link>
                  <div className="text-center food-name my-3">
                    <h5>{strMeal}</h5>
                    <p>
                      category :{" "}
                      <span className="text-danger">{strCategory}</span>
                    </p>
                    <p>
                      Area : <span className="text-danger">{strArea}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="text-center font-weight-bolder text-warning"
        style={{ fontSize: "2rem" }}
      >
        No food found{" "}
      </div>
    );
  }
};

export default Products;
