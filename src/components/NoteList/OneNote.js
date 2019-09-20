import React, { Component } from "react";

class OneNote extends Component {
  state = {};
  static defaultProps = {
    notes: []
  };

  render() {
    return (
      <div>
        <p>{this.props.note}</p>
      </div>
    );
  }
}

export default OneNote;
