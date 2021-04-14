import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      <div className="text-center d-flex flex-column align-items-center my-5">
        <i className="fas fa-utensils service-icon text-muted mb-4"></i>
        <h1 className="service-text text-center font-weight-bold">Services</h1>
      </div>
      <div className="row text-center " style={{ margin: "7rem 0" }}>
        <div className="col-md-3">
          <i className="fas fa-mug-hot service-icon"></i>
          <h2 className="font-weight-bold my-4">Breakfast</h2>
          <p className="text-muted">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum.
          </p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-birthday-cake service-icon"></i>
          <h2 className="font-weight-bold my-4">Brunch</h2>
          <p className="text-muted">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum.
          </p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-hamburger service-icon"></i>
          <h2 className="font-weight-bold my-4">Lunck</h2>
          <p className="text-muted">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum.
          </p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-pizza-slice service-icon"></i>
          <h2 className="font-weight-bold my-4">Dinner</h2>
          <p className="text-muted">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
