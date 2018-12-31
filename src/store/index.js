const initialState = {
  repos: [],
  searchInputValue: "default"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_INPUT_CHANGE":
      console.log(state.searchInputValue);
      return {
        ...state,
        searchInputValue: action.value
      };
    default:
      return state;
  }
};
