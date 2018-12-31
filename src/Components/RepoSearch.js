import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class RepoSearch extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <h1>Repo search</h1>
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
