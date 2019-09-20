import React, { Component } from "react";
import "./App.css";
import dummyStore from "./dummy";
import { Route, Redirect } from "react-router-dom";
import NoteFul from "./components/NoteFul";

class App extends Component {
  state = {
    notes: [],
    folders: [],
    selectedFolder: {}
  };

  componentDidMount() {
    this.setState({
      notes: dummyStore.notes,
      folders: dummyStore.folders
    });
  }

  handleFolderSelected = folder => {
    // console.log(folder);
    this.setState({
      selectedFolder: folder
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/noteful"
          render={props => (
            <NoteFul
              notes={this.state.notes}
              folders={this.state.folders}
              {...props}
              onFolderSelect={this.handleFolderSelected}
              selectedFolder={this.state.selectedFolder}
            />
          )}
        />
        <Redirect exact from="/" to="/noteful" />
      </div>
    );
  }
}

export default App;
