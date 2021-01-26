import React from "react";
import { Link } from "gatsby";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">
        <h1 style={style}>
          {" "}
          <strong> {props.text} </strong>
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
