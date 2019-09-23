import React from "react";
import Jumbotron from "./Jumbotron";
import SideBar from "./SideBar/SideBar";
import NoteList from "./NoteList/NoteList";

const NoteFul = props => {
  if (props.notes.length < 0) {
    throw new Error("Something went wrong");
  }
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
