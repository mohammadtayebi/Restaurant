import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section>
      <div className="container ">
        {/* the intro section  */}
        <div className="text-center d-flex flex-column align-items-center">
          <i className="fas fa-utensils welcom-icon text-muted mb-4"></i>
          <h1 className="welcome-text text-center font-weight-bolder">
            Welcome
          </h1>
        </div>
        {/* the four div part  */}
        <div className="row">
          <div className="col-md-4 text-center my-5">
            <h2 className="font-weight-bolder">2002</h2>
            <p className="text-muted mt-5 ">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.{" "}
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <h2 className="font-weight-bolder">2010</h2>
            <p className="text-muted mt-5 ">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.{" "}
            </p>
          </div>
          <div className="col-md-4 text-center my-5">
            <h2 className="font-weight-bolder">2018</h2>
            <p className="text-muted mt-5 ">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
