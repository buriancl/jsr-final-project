import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">Kanban</div>
        <div className="authentication"></div>
      </nav>
    );
  }
}
