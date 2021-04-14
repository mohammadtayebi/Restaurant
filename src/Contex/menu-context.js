import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/menu-reducer";
const initialState = {
  meal: [],
  miscellaneous: [],
  random_meal: [],
  course: "Breakfast",
  setLoading: false,
};

const MenuContext = React.createContext();
const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetching meal for the menu
  const fetchTheMeal = async (course) => {
    dispatch({ type: "SET_LOADING_MENU" });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${course}`
      );
      const meal = await response.json();
      dispatch({ type: "GET_THE_MEAL", payload: meal.meals });
    } catch (error) {
      console.log(error);
    }
  };
  // getting the value of the course to show the exact value that we wanrt in the menu in home page
  const getTheValue = (e) => {
    let value = e.target.value;
    dispatch({ type: "GETVALUE", payload: value });
  };
  // fetching for the diffault menu
  const fetchSomeFood = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous"
    );
    const data = await response.json();
    dispatch({ type: "GET_THE_MISE", payload: data.meals });
  };
  // fetching for a random meal here
  const fetchRandomMeal = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    dispatch({ type: "GET_RANDOM_MEAL", payload: data.meals });
  };
  useEffect(() => {
    fetchTheMeal(state.course);
  }, [state.course]);
  useEffect(() => {
    fetchSomeFood();
    fetchRandomMeal();
  }, []);
  return (
    <MenuContext.Provider value={{ ...state, fetchTheMeal, getTheValue }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
export { MenuContext, MenuProvider };
