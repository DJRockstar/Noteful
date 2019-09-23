import React from "react";
import PropTypes from "prop-types";
import "./validationError.css";

const ValidationError = props => {
  // ======= PROP TYPES ======
  ValidationError.propTypes = {
    message: PropTypes.string
  };

  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
};

export default ValidationError;
