import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = ({ user }) => {
  return (
    <div className="homeContainer">
      <h3 className="homeGreeting">
        Welcome to my
        <span className="homeGreetingSpan">Kanban!</span>
      </h3>
      <p className="homeInfo">
        Please log in to begin your workflow management!
      </p>
      <div className="homeLoginBtnContainer">
        <NavLink exact to="/login">
          <button className="homeLoginBtn">SIGNUP/LOGIN</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
