import React, { Component } from "react";
import "./oneNote.css";

class OneNote extends Component {
  state = {};
  static defaultProps = {
    notes: []
  };

  render() {
    return (
      <div>
        <p className="note-content">{this.props.note}</p>
      </div>
    );
  }
}

export default OneNote;
