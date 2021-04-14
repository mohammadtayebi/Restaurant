import React from "react";

const SingleIntro = ({ meal }) => {
  console.log(meal);
  return (
    <header className="AboutIntro">
      <div className="about-img">
        {meal.map((item, index) => {
          return (
            <h1 key={index}>
              {item.strMeal}
              <span style={{ color: "#ffc515" }}>.</span>
            </h1>
          );
        })}
      </div>
    </header>
  );
};

export default SingleIntro;
