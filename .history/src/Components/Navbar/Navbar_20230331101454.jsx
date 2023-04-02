import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav_container">
        <nav className="navigationBar">
          <ul className="navigationList">
            <Link to={"/"}>
              <li className="listItem selectedHoverEffect">Pokedex</li>
            </Link>
            <li className="listItem selectedHoverEffect">
              Generation
              <Dropdown></Dropdown>
            </li>
            <Link to={"/type/fire"}>
              <li className="listItem selectedHoverEffect">type</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
