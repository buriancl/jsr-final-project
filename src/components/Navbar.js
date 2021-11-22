import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <header>
      <div className="logo">
        <NavLink exact to="/">
          Kanban
        </NavLink>
      </div>
      <nav className="authentication-row">
        {user ? (
          <>
            <NavLink exact to="/kanban">
              Kanban Board
            </NavLink>
            <NavLink exact to="/logout">
              LOGOUT
            </NavLink>
          </>
        ) : (
          <NavLink exact to="/login">
            SIGNUP/LOGIN
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
