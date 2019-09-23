import React, { Component } from "react";
import "./addFolder.css";
import ValidationError from "../ValidationError/ValidationError";

class AddFolder extends Component {
  state = {
    folderName: "",
    touched: false
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  changeFolderNameHandler = e => {
    this.setState({
      folderName: e.target.value,
      touched: true
    });
  };

  validateName = () => {
    const name = this.state.folderName.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length <= 3) {
      return "Name length should be greater than 3 characters";
    }
  };

  render() {
    return (
      <>
        <h1>Add Folder</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="folderName">Enter Folder Name</label>
            <input
              type="text"
              id="folderName"
              className="form-control"
              name="folderName"
              value={this.state.folderName}
              onChange={this.changeFolderNameHandler}
              required
            />
            {this.state.touched && (
              <ValidationError message={this.validateName()} />
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validateName()}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default AddFolder;
