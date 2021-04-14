import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../Reducer/blog-reducer";
const initialState = {
  search: "",
  foods: [],
  filter_foods: [],
  foods_loading: false,
  foods_error: false,
  category: [],
  areas: [],
  category_value: "all",
  area_value: "all",
};

const BlogContext = React.createContext();
const BlogProvider = ({ children }) => {
  // our reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // start the fetch here
  useEffect(() => {
    fetchFoods();
  }, []);

  useEffect(() => {
    dispatch({ type: "FILTER_FOODS" });
  }, [state.category_value, state.area_value, state.search]);
  //   fetching all the foods From the api
  const fetchFoods = (meal) => {
    dispatch({ type: "LOADING_ALL_FOODS" });
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      .then((response) => {
        const foods = response.data;
        dispatch({ type: "GET_ALL_FOODS", payload: foods.meals });
      })
      .catch((error) => dispatch({ type: "ERROR_ALL_FOODS" }));
  };

  // const getSearchValue = (e) => {
  //   let value = e.target.value;
  //   dispatch({ type: "GET_THE_VALUE", payload: value });
  // };

  const getValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "GET_THE_SELECT_VALUE", payload: { value, name } });
  };

  // clearing the filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };
  return (
    <BlogContext.Provider value={{ ...state, getValue, clearFilters }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
export { BlogContext, BlogProvider };
