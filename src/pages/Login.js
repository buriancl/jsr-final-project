import React, { useState } from "react";
import "./AuthPages.css";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="authContainer">
      <form className="authForm" onSubmit={handleSubmit}>
        <div>
          {/* user@example.com */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          {/* Password1234! */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button className="authBtn" type="submit">
            Login
          </button>
        </div>
        <div className="authMessage">
          Don't have an account?{" "}
          <a className="authSwitchLink" href="/register">
            Signup!
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
