import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">
        <span className="span">D</span>eliziosa
      </h1>
      <NavLink to="/">
        <img className="logo" src={logo} alt="" />
      </NavLink>
      <ul className="list">
        <li>
          <NavLink to="/about">
            <span>A</span>bout
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <span>B</span>log
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span>C</span>ontact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
