const menu_reducer = (state, action) => {
  if (action.type === "SET_LOADING_MENU") {
    return { ...state, setLoading: true };
  }
  if (action.type === "GET_THE_MEAL") {
    return { ...state, setLoading: false, meal: action.payload };
  }
  if (action.type === "GETVALUE") {
    return { ...state, course: action.payload };
  }
  if (action.type === "GET_THE_MISE") {
    return { ...state, miscellaneous: action.payload };
  }
  if (action.type === "GET_RANDOM_MEAL") {
    return { ...state, random_meal: action.payload };
  }
  // this will returns an error we miss type the action.type
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default menu_reducer;
