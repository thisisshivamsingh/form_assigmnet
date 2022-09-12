import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Header;
