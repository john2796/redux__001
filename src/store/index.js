const initialState = {
  repos: [],
  searchInputValue: "default"
};

export default (state = initialState, { type, payload }) => {
  console.log(type, payload);
  //  switch (type) {

  //  case typeName:
  //    return { ...state, ...payload }

  //  default:
  //    return state
  //  }

  return state;
};
