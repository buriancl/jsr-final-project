import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <header className="navbar">
      <div className="logo">
        <NavLink className="logoName" exact to="/">
          my
          <span className="logoSpan">Kanban</span>
        </NavLink>
      </div>
      <nav className="authentication-row">
        {user ? (
          <>
            <p>Welcome {user.email}!</p>
            <NavLink className="authLink" exact to="/logout">
              LOGOUT
            </NavLink>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
