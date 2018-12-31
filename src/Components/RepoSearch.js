import React, { Component } from "react";
import { connect } from "react-redux";

export class RepoSearch extends Component {
  render() {
    return (
      <div>
        <h1>Repo search</h1>
        <input type="text" />
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearch);
