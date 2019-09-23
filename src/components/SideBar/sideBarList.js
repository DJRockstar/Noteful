import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarList = props => {
  //=====PROP TYPES=====
  SideBarList.propTypes = {
    onFolderSelect: PropTypes.func
  };

  return (
    <>
      <ul>
        <li onClick={() => props.onFolderSelect({})}>
          <Link to={`/noteful`}>All</Link>
        </li>
        {props.folders.map(folder => (
          <li onClick={() => props.onFolderSelect(folder)} key={folder.id}>
            <Link to={`/noteful/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBarList;
