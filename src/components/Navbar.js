import React from "react";
import { NavLink } from "react-router-dom";import "./Navbar.css";

function Navbar() {
  return (
     <nav className="navbar">
      <h1 className="logo">StreamList</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
	<li>
          <NavLink to="/SearchPage" className={({ isActive }) => (isActive ? "active" : "")}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={({ isActive }) => (isActive ? "active" : "")}>
            Completed
          </NavLink>
        </li>
	
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
	
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
