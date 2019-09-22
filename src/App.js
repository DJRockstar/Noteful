import React, { Component } from "react";
import "./App.css";
import dummyStore from "./dummy";
import { Route, Redirect, Switch } from "react-router-dom";
import NoteFul from "./components/NoteFul";
import AddFolder from "./components/AddFolder/AddFolder";
import AddNote from "./components/AddNote/AddNote";

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
        <Switch>
          <Route path="/noteful/addFolder" render={() => <AddFolder />} />
          <Route path="/noteful/addNote" render={() => <AddNote />} />
          <Route
            path="/"
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
        </Switch>
        <Redirect exact from="/" to="/noteful" />
      </div>
    );
  }
}

export default App;
