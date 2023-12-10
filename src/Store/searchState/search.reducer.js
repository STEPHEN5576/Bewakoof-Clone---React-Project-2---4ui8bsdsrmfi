const initialState = {
  inputValue: "",
  suggestions: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_SUGGESTIONS":
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
