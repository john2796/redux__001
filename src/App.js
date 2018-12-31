import React, { Component } from "react";
import "./App.css";
import RepoSearch from "./Components/RepoSearch";
import store from "./store/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoSearch store={store} />
      </div>
    );
  }
}

export default App;
