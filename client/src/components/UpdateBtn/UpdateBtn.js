import React from "react";
import "./UpdateBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const UpdateBtn = props => (
  <button className="btn btn-success update-btn" {...props}>
    ⟳
  </button>
);

export default UpdateBtn;
