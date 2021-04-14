import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="mb-5">
      {/* The intro section */}
      <div className="text-center d-flex flex-column align-items-center">
        <i className="fas fa-utensils welcom-icon text-muted mb-4"></i>
        <h1 className="welcome-text text-center font-weight-bolder">
          About Us
        </h1>
      </div>
      {/* the text part  */}
      <div
        className="container"
        style={{ marginTop: "4rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-md-6 text-justify">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Stpat
            sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
            volutpat. Maecenas sollicitudin est in libero pretium.
          </div>
          <div className="col-md-6 text-justify">
            Nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui
            fermentum eros hendrerit, id lobortis leo volutpat. Stpat sem.
            Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
            volutpat. Maecenas sollicitudin est in libero pretium.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
