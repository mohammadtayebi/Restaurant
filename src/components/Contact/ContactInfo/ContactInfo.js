import React from "react";
import "./ContactInfo.css";
import chef from "../../../utils/3.jpg";

const ContactInfo = () => {
  return (
    <section style={{ position: "relative", marginBottom: "5rem" }}>
      <div className="container">
        {/* the information part */}
        <div className="row">
          {/* the contact information part  */}
          <div className="col-md-5">
            <h1 className="font-weight-bold mb-5">Contact Info</h1>
            {/* location */}
            <div className="contact-info">
              <i className="fas fa-map-marker-alt"></i>
              <p>Tehran,Tehran no,khaghani,mantaghe 13</p>
            </div>
            {/* phone  */}
            <div className="contact-info">
              <i className="fas fa-phone-alt"></i>
              <p>0921-493-49-66</p>
            </div>
            {/* email address  */}
            <div className="contact-info">
              <i className="fas fa-at"></i>
              <p>tayebi923@gmail.com</p>
            </div>
          </div>
          {/* the reservation information part  */}

          <div className="col-md-3">
            <h1 className="font-weight-bold mb-5">Reservation</h1>
            <div className="contact-info ">
              <i className="fas fa-phone-alt"></i>
              <div>
                <p>0921-493-49-66</p>
                <p className="text-muted">From 8 a.m. - 23:30 p.m.</p>
              </div>
            </div>
          </div>
        </div>
        {/* the picture of the chef  */}
        <div className="contact-chef">
          <img src={chef} alt="" />
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ContactInfo;
