import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import OneNote from "./OneNote";
import PropTypes from "prop-types";
import "./noteList.css";

class NoteList extends Component {
  state = {
    currentNoteId: ""
  };
  // ====== PROP TYPES ==========
  static propTypes = {
    notes: PropTypes.array,
    selectedFolder: PropTypes.object
  };

  //========EVENT HANDLERS ============
  handleClick = currentNoteId => {
    console.log(currentNoteId);
    this.setState({
      currentNoteId
    });
  };

  static defaultProps = {
    notes: []
  };

  render() {
    const { selectedFolder, notes } = this.props;
    const filteredNotes =
      Object.keys(selectedFolder).length > 0
        ? notes.filter(n => n.folderId === selectedFolder.id)
        : notes;
    return (
      <div className="noteList">
        <ul>
          {filteredNotes.map(note => (
            <li key={note.id}>
              <h3 className="title">
                <Link
                  onClick={() => this.handleClick(note.id)}
                  to={`/noteful/notes/${note.id}`} //Updating the state's currentNoteId to the one when clicked
                >
                  {note.name}
                </Link>
              </h3>
              {this.state.currentNoteId === note.id ? ( //once the state is updated with CurrentNoteId i am comparing it here so that if there's a match then the content gets displayed
                <Route
                  path="/noteful/notes/:noteId"
                  render={props => <OneNote note={note.content} {...props} />}
                />
              ) : null}
              <p className="dateModified">
                <strong>Date modified on </strong> : {note.modified}
              </p>
              <button type="button" className="btn btn-danger">
                Delete Note
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary">
          <Link to="/noteful/addNote" className="add-note-form">
            Add Note
          </Link>
        </button>
      </div>
    );
  }
}

export default NoteList;
