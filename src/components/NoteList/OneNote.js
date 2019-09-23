import React, { Component } from "react";
import PropTypes from "prop-types";
import "./oneNote.css";

class OneNote extends Component {
  state = {};
  static defaultProps = {
    notes: []
  };
  //======= PROP TYPES ========
  static propTypes = {
    notes: PropTypes.array
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
