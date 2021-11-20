import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <NavLink exact to="/">
            Kanban
          </NavLink>
        </div>
        <nav className="authentication-row">
          {this.props.user ? (
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
  }
}
