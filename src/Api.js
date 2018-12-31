const getRepos = (dispatch, query) => {
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.items);
      dispatch({ type: "SET_REPOS", repos: data.items });
    });
};

export default {
  getRepos
};
