const initialState = {
  repos: [],
  searchInputValue: "default"
};
// Reduceres
export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_INPUT_CHANGE":
      console.log(state.searchInputValue);
      return {
        ...state,
        searchInputValue: action.value
      };
    case "SET_REPOS":
      console.log(state.searchInputValue);
      return {
        ...state,
        ...action,
        repos: action.repos
      };
    default:
      return state;
  }
};
