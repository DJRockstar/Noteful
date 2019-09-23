import React, { Component } from "react";
import "./sidebar.css";
import SideBarList from "./sideBarList";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SideBarList
          folders={this.props.folders}
          onFolderSelect={this.props.onFolderSelect}
        />
        <button type="button" className="btn btn-primary">
          <Link to="/noteful/addFolder">Add Folder</Link>
        </button>
      </div>
    );
  }
}

export default SideBar;
