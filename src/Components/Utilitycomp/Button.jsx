import React from "react";
import { NavLink } from "react-router-dom";

function Button({ path, text, css }) {
  return (
    <>
      <button className={`${css} text-wrap rounded-lg font-semibold`}>
        <NavLink to={path}>{text}</NavLink>
      </button>
    </>
  );
}

export default Button;
