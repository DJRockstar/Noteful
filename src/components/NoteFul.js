import React from "react";
import Jumbotron from "./Jumbotron";
import SideBar from "./SideBar/SideBar";
import NoteList from "./NoteList/NoteList";

const NoteFul = props => {
  return (
    <>
      <Jumbotron />
      <SideBar
        folders={props.folders}
        onFolderSelect={props.onFolderSelect}
        selectedFolder={props.selectedFolder}
      />
      <NoteList notes={props.notes} selectedFolder={props.selectedFolder} />
    </>
  );
};

export default NoteFul;
