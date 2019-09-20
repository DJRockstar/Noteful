import React, { Component } from "react";
import "./sidebar.css";
import SideBarList from "./sideBarList";

class SideBar extends Component {
  state = {};

  handleClick = () => {
    // alert("im cool");
  };

  render() {
    return (
      <div className="sidebar">
        <SideBarList
          folders={this.props.folders}
          onFolderSelect={this.props.onFolderSelect}
        />
      </div>
    );
  }
}

export default SideBar;
