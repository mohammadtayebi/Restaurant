import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  // to check when the pictures changes, the number of slides dont go more than 2 and give us error
  useEffect(() => {
    if (index < 0) {
      setIndex(2);
    }
    if (index > 2) {
      setIndex(0);
    }
  }, [index]);
  // for sliding after 3 sec
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="testimonials ">
      <div className="m-auto">
        {/* the intro text  */}
        <div className="text-center d-flex flex-column align-items-center testimonials-intro-text">
          <i className="fas fa-balance-scale testimonials-icon text-white mb-4"></i>
          <h1 className="testimonials-text text-center font-weight-bolder text-white">
            Testimonials
          </h1>
        </div>
        {/* the slider part  */}
        <div className="tes-slider text-center">
          {/* first slide  */}
          <div
            className={
              index === 0
                ? "tes-slide tes-active"
                : index === 1
                ? "tes-slide tes-last "
                : index === 2
                ? "tes-slide tes-next"
                : null
            }
          >
            <i
              className="fas fa-quote-right text-white mb-5"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="text-white mb-4">
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est feu-giat ut.
            </p>
            <p>
              <span style={{ color: "#ffc515" }}>Ali zade</span>
              <span className="text-white"> ,Client</span>
            </p>
          </div>
          {/* second slide  */}
          <div
            className={
              index === 1
                ? "tes-slide tes-active"
                : index === 2
                ? "tes-slide tes-last "
                : index === 0
                ? "tes-slide tes-next"
                : null
            }
          >
            <i
              className="fas fa-quote-right text-white mb-5"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="text-white mb-4">
              some text that im making just to fill the gap and there is no
              other reason for using these texts hesre
            </p>
            <p>
              <span style={{ color: "#ffc515" }}>Dehghan</span>
              <span className="text-white"> ,Client</span>
            </p>
          </div>
          {/* Third slide  */}
          <div
            className={
              index === 2
                ? "tes-slide tes-active"
                : index === 0
                ? "tes-slide tes-last "
                : index === 1
                ? "tes-slide tes-next"
                : null
            }
          >
            <i
              className="fas fa-quote-right text-white mb-5"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="text-white mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              nam quisquam architecto enim maiores officiis eveniet dignissimos
              aspernatur doloribus, laborum vitae? Suscipit a doloribus
              consequuntur explicabo inventore delectus praesentium excepturi.
            </p>
            <p>
              <span style={{ color: "#ffc515" }}>Haji Tayebi</span>
              <span className="text-white"> ,Client</span>
            </p>
          </div>
        </div>
      </div>
      {/* the section that contains the circle that changes the slide  */}
      <div className="tes-circle w-100 text-center">
        <i
          // if the ircle should be fill or not
          className={
            index === 0
              ? "fas fa-circle text-white px-1 tes-circle-cursor"
              : "far fa-circle text-white px-1 tes-circle-cursor"
          }
          onClick={() => setIndex(0)}
        ></i>
        <i
          // if the ircle should be fill or not
          className={
            index === 1
              ? "fas fa-circle text-white px-1 tes-circle-cursor"
              : "far fa-circle text-white px-1 tes-circle-cursor"
          }
          onClick={() => setIndex(1)}
        ></i>
        <i
          // if the ircle should be fill or not
          className={
            index === 2
              ? "fas fa-circle text-white px-1 tes-circle-cursor"
              : "far fa-circle text-white px-1 tes-circle-cursor"
          }
          onClick={() => setIndex(2)}
        ></i>
      </div>
    </section>
  );
};

export default Testimonials;
