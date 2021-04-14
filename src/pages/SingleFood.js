import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleIntro from "../components/SinglePage/SingleIntro";

const SingleFood = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();
  const fetchFood = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setFood(data.meals);
  };
  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <section className="my-5">
      <SingleIntro meal={food} />
      <div className="container">
        {food.map((item, index) => {
          const {
            strMealThumb,
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = item;
          return (
            <div className="row" key={index}>
              <div className="col-lg-6">
                <img src={strMealThumb} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <h1 className="text-warning text-center">{strMeal}</h1>
                <p>
                  Category :{" "}
                  <span className="text-secondary font-weight-bolder">
                    {strCategory}
                  </span>
                </p>
                <p>
                  Area :{" "}
                  <span className="text-secondary font-weight-bolder">
                    {strArea}
                  </span>
                </p>
                <p>{strInstructions}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SingleFood;
