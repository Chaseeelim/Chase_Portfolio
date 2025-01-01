import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar custom-navbar">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">
          Chase Lim
        </Link>

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li>
            <NavLink className="nav-link" exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
