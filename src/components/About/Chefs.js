import React from "react";
import "./Chefs.css";
import chef_1 from "../../utils/1.jpg";
import chef_2 from "../../utils/2.jpg";
import chef_3 from "../../utils/3.jpg";

const Chefs = () => {
  return (
    <section className="chef-about">
      {/* the intro part  */}
      <div className="text-center d-flex flex-column align-items-center">
        <i
          className="fas fa-utensils welcom-icon text-white mb-4"
          style={{ marginTop: "6rem" }}
        ></i>
        <h1 className="welcome-text text-center font-weight-bolder text-white">
          Chefs
        </h1>
      </div>
      {/* the chefs part  */}
      <div className="container chef">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={chef_1} alt="chef" className="img-fluid" />
            <h4 className="my-4" style={{ color: "#ffc515" }}>
              Chef Ted Chapman
            </h4>
            <p className="text-white mt-4 mb-5">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src={chef_2} alt="chef" className="img-fluid" />
            <h4 className="my-4" style={{ color: "#ffc515" }}>
              Chef Ted Chapman
            </h4>
            <p className="text-white mt-4 mb-5">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src={chef_3} alt="chef" className="img-fluid" />
            <h4 className="my-4" style={{ color: "#ffc515" }}>
              Chef Ted Chapman
            </h4>
            <p className="text-white mt-4 mb-5">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
