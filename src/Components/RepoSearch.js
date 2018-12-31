import React, { Component } from "react";
import { connect } from "react-redux";

export class RepoSearch extends Component {
  render() {
    return (
      <div>
        <h1>Repo search</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
        </form>
        <ul>
          <li>repo #1</li>
          <li>repo #2</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.searchInputValue
});

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: evt => {
      dispatch({ type: "SEARCH_INPUT_CHANGE", value: evt.target.value });
    },
    handleSubmit: evt => {
      evt.preventDefault();
      let query = "steak";
      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
        });

      console.log("submit");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
