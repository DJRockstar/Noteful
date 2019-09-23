import React, { Component } from "react";
import "./addNote.css";
import ValidationError from "../ValidationError/ValidationError";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class AddNote extends Component {
  state = {
    title: {
      name: "",
      touched: false
    },
    description: {
      name: "",
      touched: false
    },
    folderName: {
      name: "",
      touched: false
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleTitleChange = e => {
    this.setState({
      title: {
        name: e.target.value,
        touched: true
      }
    });
  };
  handleDescChange = e => {
    this.setState({
      description: {
        name: e.target.value,
        touched: true
      }
    });
  };
  handleFolderNameChange = e => {
    this.setState({
      folderName: {
        name: e.target.value,
        touched: true
      }
    });
  };

  validateTitle = () => {
    const name = this.state.title.name.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length <= 3) {
      return "Name length should be greater than 3 characters";
    }
  };
  validateDesc = () => {
    const name = this.state.description.name.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length <= 3) {
      return "Name length should be greater than 3 characters";
    }
  };
  validateFolderName = () => {
    const name = this.state.folderName.name.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length <= 3) {
      return "Name length should be greater than 3 characters";
    }
  };

  render() {
    const titleError = this.validateTitle();
    const descError = this.validateDesc();
    const folderNameError = this.validateFolderName();
    return (
      <>
        <h1>Add Notes</h1>
        <ErrorBoundary>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="noteTitle">Enter Note Title</label>
              <input
                type="text"
                id="noteTitle"
                name="noteTitle"
                className="note-title"
                onChange={this.handleTitleChange}
              />
              {this.state.title.touched && (
                <ValidationError message={titleError} />
              )}
            </div>
            <div className="form-group">
              <label htmlFor="noteDesc">Enter Note Description</label>
              <input
                type="text"
                id="noteDesc"
                name="noteDesc"
                className="note-desc"
                onChange={this.handleDescChange}
              />
              {this.state.description.touched && (
                <ValidationError message={descError} />
              )}
            </div>
            <div className="form-group">
              <label htmlFor="addToFolder">Enter the folder name</label>
              <input
                type="text"
                id="addToFolder"
                name="addToFolder"
                className="add-to-folder"
                onChange={this.handleFolderNameChange}
              />
              {this.state.folderName.touched && (
                <ValidationError message={folderNameError} />
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                this.validateTitle() ||
                this.validateDesc() ||
                this.validateFolderName()
              }
            >
              Submit
            </button>
          </form>
        </ErrorBoundary>
      </>
    );
  }
}

export default AddNote;
