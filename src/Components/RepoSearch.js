import React, { Component } from "react";
import { connect } from "react-redux";
import Api from "../Api";

class RepoSearch extends Component {
  render() {
    return (
      <div>
        <h1>Repo search</h1>
        <form
          onSubmit={evt => this.props.handleSubmit(evt, this.props.inputValue)}
        >
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
        </form>
        <ul>
          <li>tesibng</li>
          <li>tesibng</li>
          <li>tesibng</li>
          {this.props.repos.map(repo => {
            return (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.searchInputValue,
  repos: state.repos
});

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: evt => {
      dispatch({ type: "SEARCH_INPUT_CHANGE", value: evt.target.value });
    },
    handleSubmit: (evt, query) => {
      evt.preventDefault();
      Api.getRepos(dispatch, query);
      console.log("submit");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
