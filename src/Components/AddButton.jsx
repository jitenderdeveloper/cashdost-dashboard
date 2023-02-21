import React from "react";
import { Link } from "react-router-dom";

function AddButton(props) {
  return (
    <>
      <div className="button-link">
        <Link to={props.link} type="button" className="btn">
          {props.title}
        </Link>
      </div>
    </>
  );
}

export default AddButton;
