const blog_reducer = (state, action) => {
  // loading is true while we are fetching all the foods
  if (action.type === "LOADING_ALL_FOODS") {
    return { ...state, foods_loading: true, foods_error: false };
  }
  //   giving us error if we have any while fetching all the products
  if (action.type === "ERROR_ALL_FOODS") {
    return { ...state, foods_error: true, foods_loading: false };
  }
  if (action.type === "GET_ALL_FOODS") {
    // getting all the foods from the api
    return {
      ...state,
      foods_loading: false,
      foods_error: false,
      foods: action.payload,
      filter_foods: action.payload,
    };
  }
  // getting all the categories from the api
  if (action.type === "GET_ALL_CATEGORY") {
    return {
      ...state,
      category_loading: false,
      category_Error: false,
      category: action.payload,
    };
  }
  // getting all the areas from the api
  if (action.type === "GET_ALL_AREAS") {
    return {
      ...state,
      foods_loading: false,
      foods_error: false,
      areas: action.payload,
    };
  }
  // getting the value of category and area
  if (action.type === "GET_THE_SELECT_VALUE") {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === "FILTER_FOODS") {
    const { foods, category_value, area_value, filter_foods, search } = state;
    let tempFoods = [...filter_foods];
    // console.log(tempFoods);
    if (category_value !== "all") {
      tempFoods = tempFoods.filter((p) => {
        return p.strCategory === category_value;
      });
    }
    if (area_value !== "all") {
      tempFoods = tempFoods.filter((p) => {
        return p.strArea === area_value;
      });
    }
    if (search) {
      tempFoods = tempFoods.filter((p) => {
        return p.strMeal.toLowerCase().startsWith(search);
      });
    }
    return { ...state, foods: tempFoods };
  }
  if (action.type === "CLEAR_FILTER") {
    return { ...state, search: "", category_value: "all", area_value: "all" };
  }
  // this will returns an error we miss type the action.type
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default blog_reducer;
