import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav_container">
        <nav className="navigationBar">
          <ul className="navigationList">
            <li className="listItem selectedHoverEffect">Pokedex</li>

            <li className="listItem selectedHoverEffect">Generation</li>
            <Link to={'/'}>
            <li className="listItem selectedHoverEffect">type</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
